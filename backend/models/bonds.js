const mongoose = require('mongoose');

const bondSchema = new mongoose.Schema({

    symbol : {
        type : String,
        required : true,
    },
    series:{
        type : String,
    },
    bondtype:{
        type : String,
    },
    couponrate:{
        type : String,
        required : true,
    },
    facevalue:{
        type : String,
        required : true,
    },
    ltp:{
        type : String,
        required : true,
    },
    chng:{
        type : String,
        required : true,
    },
    volume:{
        type : String,
    },
    value:{
        type : String,
    },
    creditRating:{
        type : String,   
    },
    maturityDate:{
        type : String,
    }
});

module.exports = mongoose.model('Bonds',bondSchema);