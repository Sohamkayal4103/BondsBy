const mongoose = require('mongoose')
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Name is required'],
    },
    email: {
        type: String,
        required: [true, 'Email is required'],
        unique: true,
    },
    image: {
        type: String,
        default: 'https://static.tutordirect.com/prod/media/images/user-avatar-placeholder.max-320x320.png',
        required: false
    },
    pancard:{
        type: String,
        required: false
    },
    aadharcard:{
        type: String,
    },
    address:{
        type: String,
    },
    dmataccountnumber:{
        type: Number,
    },
    iSVerified:{
        type: Boolean,
        default: false
    }
    bonds:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Bonds',
        default: []
    }]

})

module.exports = mongoose.model('User', userSchema)
