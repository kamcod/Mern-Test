const {badRequestError} = require('../errors/index');
const {StatusCodes} = require('http-status-codes')
const User = require('../modal/user')

const getDashboardStats = async (req, res) => {
    const user = await User.findOne({_id: req.userId})
    if(user){
        res.status(StatusCodes.OK).json({name: user.name})
    } else {
        throw new badRequestError("User Not Found");
    }

};

module.exports = {getDashboardStats};