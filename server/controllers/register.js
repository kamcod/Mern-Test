
const User = require('../modal/user')

const {StatusCodes} = require('http-status-codes')
const bcrypt = require("bcryptjs");

const signup = async (req, res) =>{
    const {name, email, password } = req.body;

    const randomBytes = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, randomBytes);
    
    const tempUser = {name, email, password: hashedPassword}

    // await User.create({...tempUser})
    res.status(StatusCodes.CREATED).json({...tempUser})
}

module.exports = {signup}