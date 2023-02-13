const Transaction = require('../models/transactions')
const asyncHandler = require('express-async-handler')

const getTransactions = async (req, res) => {
    res.status(200).json(await Transaction.find())
}

// const getUserByEmail = async(req,res) => {
//     res.status(200).json(await User.findOne({email: req.params.email}))
// }


const addTransaction = asyncHandler(async(req,res) => {
    const { faceVal, units, total_cost, bondId, userId } = req.body
    const transaction = await Transaction.create({
        faceVal,
        units,
        total_cost,
        bondId,
        userId
    })
    if(transaction){
        res.status(201).json(transaction)
    } else {
        res.status(400)
        throw new Error('Invalid transaction data')
    }
})

// const addBond = asyncHandler(async(req,res) => {
//     const {userId} = req.body;
//     const bondExist = await Bonds.findById(req.params.id);
//     const userExist = await User.findById(req.params.id);
//     console.log(bondExist);

// })


module.exports = {getTransactions,addTransaction}