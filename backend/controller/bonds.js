const Bonds = require('../models/bonds');
const asyncHandler = require('express-async-handler');
const bondjson = require('../bonds.json');

const getBonds = async (req, res) => {
    res.status(200).json(await Bonds.find())
}

const pushbond = async (req, res) => {
  await Bonds.create(bondjson);
}


module.exports = {getBonds,pushbond};