const mongoose = require('mongoose')
const transactionSchema = new mongoose.Schema({
    faceVal: {
        type: Number,
        required: [true, 'Facevalue are required'],
    },
    units: {
        type: Number,
        required: [true, 'Units are required'],
    },
    total_cost: {
        type: Number,
        required: [true, 'Total amount is required'],
        unique: true,
    },
    bondId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Bonds' 
    },
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User' 
    }
})

module.exports = mongoose.model('Transaction', transactionSchema)
