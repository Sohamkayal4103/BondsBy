const express = require('express')
const router = express.Router()

const {addTransaction,getTransactions} = require('../controller/transaction')

router.route('/').get(getTransactions)
router.route('/add').post(addTransaction)

module.exports = router