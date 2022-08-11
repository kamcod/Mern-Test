const express = require('express')
const router = express.Router()


const {getDashboardStats} = require('../controllers/jobs')


router.route('/dashboard').post(getDashboardStats)

module.exports = router