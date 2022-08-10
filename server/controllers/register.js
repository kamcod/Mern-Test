
const User = require('../modal/user') 
const jwt = require('jsonwebtoken');

const {StatusCodes} = require('http-status-codes')
const bcrypt = require("bcryptjs");

const testApi = async (req, res) => {
    res.status(StatusCodes.CREATED).json({message: "testing", body: req.body})
}
const SignUp = async (req, res) =>{
   const user = await User.create({...req.body})
    const token = user.createJWT();
    res.status(StatusCodes.CREATED).json({name: user.name, token})
}
const SignIn = async (req, res) =>{
   const {email, password} = req.body;
     res.status(StatusCodes.OK).json({...req.body})
 }

module.exports = {SignUp, SignIn, testApi}