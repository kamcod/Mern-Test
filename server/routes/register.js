const express = require('express')
const router = express.Router()

const {SignUp, SignIn, Logout, adminLogin, adminLogout} = require('../controllers/register')

router.route('/register').post(SignUp)
router.route('/login').post(SignIn)
router.route('/logout').delete(Logout)
router.route('/admin/login').post(adminLogin)
router.route('/admin/logout').delete(adminLogout)

module.exports = router
