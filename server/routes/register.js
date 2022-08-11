const express = require('express')
const router = express.Router()

const {SignUp, SignIn} = require('../controllers/register')

router.route('/register').post(SignUp)
router.route('/login').post(SignIn)
module.exports = router