const express = require('express')
const router = express.Router();

const { getAllUsers } = require('../controllers/admin')


router.route('/getAllUsers').get(getAllUsers)

module.exports = router;