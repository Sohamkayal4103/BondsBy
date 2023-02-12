const Bonds = require('../models/bonds');
const User = require('../models/user');
const asyncHandler = require('express-async-handler');
const bondjson = require('../bonds.json');
const { default: mongoose } = require('mongoose');

const getBonds = async (req, res) => {
    res.status(200).json(await Bonds.find())
}

const pushbond = async (req, res) => {
  await Bonds.create(bondjson);
}

const getBondsById = asyncHandler(async (req, res) => {
  const bond = await Bonds.findById(req.params.bondId)
  if(bond){
    res.json(bond)
  }
  else{
    res.status(404)
    throw new Error('Bond not found')
  }
})

const addTrade = async (req, res) => {
  const {email} = req.body
  const user = await User.findOne({email})
  const bond = await Bonds.findById(req.params.bondId)
  const id = bond._id

 

  const bondItem = await Bonds.findOneAndUpdate(id,{$push:{userTrade:user._id}},{new:true})
  if(bondItem){
    res.status(201).json(bondItem)
  }
  else{
    res.status(400)
    throw new Error('Invalid user data')
  }
}

const updateBondvol = async (req,res) => {
  const id = await req.params.bondId;
  const {unitsReq,userId} = req.body;
  const bond = await Bonds.findById(id);
  const availableBonds = parseInt(bond.volume);
  const neededBonds = parseInt(unitsReq);
  const finalVolume = availableBonds - neededBonds;
  const finalVolumeStr = finalVolume.toString();
  const bondItem = await Bonds.findByIdAndUpdate(id,{volume:finalVolumeStr},{new:true});
  const userItem = await User.findByIdAndUpdate(userId,{$push:{bonds:id}},{new:true});
  // console.log(userItem);
  if(bondItem){
    res.json(bondItem)
  }
  else{
    res.status(404)
    throw new Error('Something went wrong')
  }
}


module.exports = {getBonds,pushbond,addTrade,getBondsById,updateBondvol};