const Bonds = require('../models/bonds');
const asyncHandler = require('express-async-handler');

const getBonds = async (req, res) => {
    res.status(200).json(await Bonds.find())
}


module.exports = {getBonds};