const express = require('express');
const router = express.Router();

const {getBonds,pushbond, addTrade,getBondsById} = require('../controller/bonds');

router.route('/').get(getBonds);
router.route('/static').get(pushbond);
router.route('/addTrade/:bondId').put(addTrade);
router.route('/:bondId').get(getBondsById);

module.exports = router;