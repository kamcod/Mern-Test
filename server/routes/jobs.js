const express = require('express')
const router = express.Router()


const {getDashboardStats, createPost, editPost, deletePost} = require('../controllers/jobs')


router.route('/dashboard').post(getDashboardStats)
router.route('/post').post(createPost)
router.route('/post/:id').patch(editPost).delete(deletePost)

module.exports = router