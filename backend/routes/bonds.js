const express = require('express');
const router = express.Router();

const {getBonds} = require('../controller/bonds');

router.route('/').get(getBonds);

module.exports = router;