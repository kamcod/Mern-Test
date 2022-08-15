const {badRequestError} = require('../errors/index');
const {StatusCodes} = require('http-status-codes')
const User = require('../modal/user')
const Post = require('../modal/post');

const getDashboardStats = async (req, res) => {
    const user = await User.findOne({_id: req.user.userId})
    const post = await Post.find({createdBy: req.user.userId})
    if(user){
        res.status(StatusCodes.OK).json({name: user.name, post})
    } else {
        throw new badRequestError("User Not Found");
    }

};

const createPost = async (req, res) => {
    req.body.createdBy = req.user.userId;
        const post = await Post.create({...req.body});
        res.status(StatusCodes.CREATED).json({ post_title: post.title})
};

const editPost = async (req, res) => {
    const {
        body: {title, description},
        query: {id: postId}
    } = req;
    if(title === '' || description === ''){
        throw new badRequestError('Title and description can not be empty');    
    }
        const post = await Post.findByIdAndUpdate({_id: postId}, 
            req.body, { new: true, runValidators: true });
            
        res.status(StatusCodes.OK).json({ status: "updated", post})
};

module.exports = {getDashboardStats, createPost, editPost}; 