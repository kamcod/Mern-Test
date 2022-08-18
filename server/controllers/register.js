
const User = require('../modal/user') 
// const jwt = require('jsonwebtoken');
const {badRequestError, unAuthenticatedError} = require('../errors/index')

const {StatusCodes} = require('http-status-codes')
// const bcrypt = require("bcryptjs");
const sendMail = require('../utils/sendMail')

const SignUp = async (req, res) =>{
   const user = await User.create({...req.body})
await sendMail(req.body.email, {
  subject: 'Account Created',
  text: 'Congratualations! Your account is successfully created on Mern App.'
})
    res.status(StatusCodes.CREATED).json({name: user.name})
}
const SignIn = async (req, res) =>{
    const { email, password } = req.body
  
    if (!email || !password) {
      throw new badRequestError('Please provide email and password')
    }
    const user = await User.findOne({ email })
    if (!user) {
      throw new unAuthenticatedError('Invalid Credentials')
    }
    const isPasswordCorrect = await user.matchPassword(password)
    if (!isPasswordCorrect) {
      throw new unAuthenticatedError('Invalid Credentials')
    }
    const token = user.createJWT()
    res.status(StatusCodes.OK).json({ user: { name: user.name }, token })
 }

module.exports = {SignUp, SignIn}