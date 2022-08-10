const express = require('express')
const router = express.Router()
const {badRequestError} = require('../errors')

const {SignUp, SignIn, testApi} = require('../controllers/register')

router.route('/register').post(SignUp)
router.route('/login').post(SignIn)
router.route('/testApi').post(testApi)

module.exports = router