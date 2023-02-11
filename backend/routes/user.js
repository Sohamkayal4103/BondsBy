const express = require('express')
const router = express.Router()

const {getUsers,addUser, verifyUser} = require('../controller/user')

router.route('/').get(getUsers)
router.route('/add').post(addUser)
router.route('/verify/:id').put(verifyUser)

module.exports = router