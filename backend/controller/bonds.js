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

// const addUserTrade = async (req,res) => {
//   const { _id,symbol,series,bondtype,couponrate,facevalue,ltp,chng,volume,value,creditRating,maturityDate,userEmail } = req.body;
//   const userExist = await User.findOne({userEmail});
//   const bondExist = await Bonds.findOne({_id});
  
//   if(userExist && bondExist){
//     bondExist.symbol = symbol;
//     bondExist.series = series;
//     bondExist.bondtype = bondtype;
//     bondExist.couponrate = couponrate;
//     bondExist.facevalue = facevalue;
//     bondExist.ltp = ltp;
//     bondExist.chng = chng;
//     bondExist.volume = volume;
//     bondExist.value = value;
//     bondExist.creditRating = creditRating;
//     bondExist.maturityDate = maturityDate;
//     bondExist.userTrade.push(userExist._id);
//     res.json({
//       _id: bondExist._id,
//       symbol: bondExist.symbol,
//       series: bondExist.series,
//       bondtype: bondExist.bondtype,
//       couponrate: bondExist.couponrate,
//       facevalue: bondExist.facevalue,
//       ltp: bondExist.ltp,
//       chng: bondExist.chng,
//       volume: bondExist.volume,
//       value: bondExist.value,
//       creditRating: bondExist.creditRating,
//       maturityDate: bondExist.maturityDate,
//       userTrade: bondExist.userTrade
//     })
//   }
//   else if(userExist){
//     console.log("went here")
//   }
//   else if(bondExist){
//     console.log("here it is")
//   }
//   else{
//     res.status(400);
//     throw new Error('Something went wrong')
//   }

// }

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


module.exports = {getBonds,pushbond,addTrade};