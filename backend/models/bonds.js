const mongoose = require('mongoose');

const bondSchema = new mongoose.Schema({
    id : {
        type : Number,
        required : true,
    },
    symbol : {
        type : String,
        required : true,
    },
    series:{
        type : String,
    },
    bondtype:{
        type : String,
        required : true,
    },
    couponrate:{
        type : Number,
        required : true,
    },
    facevalue:{
        type : Number,
        required : true,
    },
    ltp:{
        type : Number,
        required : true,
    },
    chng:{
        type : Number,
        required : true,
    },
    volume:{
        type : Number,
    },
    creditRating:{
        type : String,   
    },
    maturityDate:{
        type : String,
    }
});

module.exports = mongoose.model('Bonds',bondSchema);