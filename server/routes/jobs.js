const express = require('express')
const router = express.Router()


const {getDashboardStats, getPost, getAllPosts, createPost, editPost, deletePost, payment} = require('../controllers/jobs')


router.route('/dashboard').get(getDashboardStats)
router.route('/post').get(getAllPosts).post(createPost)
router.route('/payment').post(payment)
router.route('/post/:id').get(getPost).patch(editPost).delete(deletePost)

module.exports = router
