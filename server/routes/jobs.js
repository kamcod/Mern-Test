const express = require('express')
const router = express.Router()


const {getDashboardStats, createPost, editPost} = require('../controllers/jobs')


router.route('/dashboard').post(getDashboardStats)
router.route('/createPost').post(createPost)
router.route('/editPost').post(editPost)

module.exports = router