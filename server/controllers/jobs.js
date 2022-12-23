const {badRequestError} = require('../errors/index');
const {StatusCodes} = require('http-status-codes')
const User = require('../modal/user')
const Post = require('../modal/post');
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY)

const getDashboardStats = async (req, res) => {
    const user = await User.findOne({_id: req.user.userId})
    const post = await Post.find({createdBy: req.user.userId})
    if(user){
        res.status(StatusCodes.OK).json({name: user.name, post})
    } else {
        throw new badRequestError("User Not Found");
    }

};

const getPost = async (req, res) => {
    const {id: postId} = req.params;
    const {userId} = req.user;
    const post = await Post.findOne({
        _id: postId,
        createdBy: userId,
      });
      res.status(StatusCodes.OK).json({ post})
    };

    const getAllPosts = async (req, res) => {
        const {userId} = req.user;
        const post = await Post.find({
            createdBy: userId,
          }).sort('createdAt');
          res.status(StatusCodes.OK).json({ post})
        };

const createPost = async (req, res) => {
    req.body.createdBy = req.user.userId;
        const post = await Post.create({...req.body});
        res.status(StatusCodes.CREATED).json({ post_title: post.title})
};

const editPost = async (req, res) => {
    const {
        body: {title, description},
        params: {id: postId}
    } = req;
    if(title === '' || description === ''){
        throw new badRequestError('Title and description can not be empty');
    }
        const post = await Post.findByIdAndUpdate({_id: postId},
            req.body, { new: true, runValidators: true });

        res.status(StatusCodes.OK).json({ status: "updated", post})
};

const deletePost = async (req, res) => {
    const {id: postId} = req.params;
    const {userId} = req.user;
    const post = await Post.findByIdAndRemove({
        _id: postId,
        createdBy: userId,
      });
      res.status(StatusCodes.OK).json({ status: "remove", post})
    };
const payment = async (req, res) => {
    const totalAmmount = req.body.amount;

    stripe.customers.create({
        email: req.body.email,
        source: req.body.id,
        name: 'M Kamran',
        address: {
            line1: "abc street",
            postal_code: '11092',
            city: 'new york',
            state: 'new york',
            country: 'United State'
        }
    })
        .then((customer) => {
            return stripe.charges.create({
                amount: '107',
                description: "Mern stack payment method",
                currency: 'USD',
                customer: customer.id
            })
        })
        .then((charge) => {
            res.send("success payment")
        })
        .catch(err => {
            console.log("errr", err);
            res.send(err)
        })
};

const subscription = async (req, res) => {
    //console.log("in payment subscription endpoint", req.body)
    const {email} = req.body;

    try {
        // create customer
        const customer = await stripe.customers.create({
            email,
            source: req.body.id
        });

        // create product if not set up in stripe app dashboard
        const product = await stripe.products.create({
            name: 'test product'
        });
        return;

        // create subscription
        const subscription = await stripe.subscriptions.create({
            customer: customer.id,
            items: [
                {
                    price_data: {
                        currency: "USD",
                        product: product.id,
                        unit_amount: "500",
                        recurring: {
                            interval: "month"
                        }
                    }
                }
            ],
            payment_settings: {
                payment_method_types: ["card"],
                save_default_payment_method: "on_subscription",
            },
            expand: ["latest_invoice.payment_intent"]
        });
        res.json({
            message: "Subscription Successfull",
            clientSecret: subscription.latest_invoice.payment_intent.client_secret,
            subscriptionId: subscription.id,
        })
    }
    catch (err) {
        console.log("errorr", err);
    }
}

module.exports = {
    getDashboardStats,
    getPost,
    getAllPosts,
    createPost,
    editPost,
    deletePost,
    payment,
    subscription
};
