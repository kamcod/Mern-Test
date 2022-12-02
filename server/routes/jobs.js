const express = require('express')
const router = express.Router()


const {test, getDashboardStats, getPost, getAllPosts, createPost, editPost, deletePost} = require('../controllers/jobs')


router.route('/dashboard').get(getDashboardStats)
router.route('/test').get(test)
router.route('/post').get(getAllPosts).post(createPost)
router.route('/post/:id').get(getPost).patch(editPost).delete(deletePost)

module.exports = router
