const express = require('express')
const router = express.Router()
const {badRequestError} = require('../errors')

const {signup, testApi} = require('../controllers/register')

router.route('/register').post(signup)
router.route('/testApi').post(testApi)

module.exports = router