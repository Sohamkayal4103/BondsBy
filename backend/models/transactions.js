const mongoose = require('mongoose')
const userSchema = new mongoose.Schema({
    faceVal: {
        type: number,
        required: [true, 'Facevalue are required'],
    },
    units: {
        type: number,
        required: [true, 'Units are required'],
    },
    total_cost: {
        type: number,
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

module.exports = mongoose.model('Transaction', userSchema)
