const express = require('express');
const router = express.Router();

const {getBonds,pushbond, addTrade} = require('../controller/bonds');

router.route('/').get(getBonds);
router.route('/static').get(pushbond);
router.route('/addTrade/:bondId').put(addTrade);

module.exports = router;