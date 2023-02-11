const express = require('express');
const router = express.Router();

const {getBonds,pushbond} = require('../controller/bonds');

router.route('/').get(getBonds);
router.route('/static').get(pushbond);

module.exports = router;