const mongoose = require('mongoose');

const DaySummarySchema = new mongoose.Schema({
    date:{
        type: String,
        // required: true,
    },
    cash:{
        type: Number,
    },
    card:{
        type: Number,
    },    
    transfer:{
        type: Number,
    },
    total:{
        type: Number,
        // required: true,
    },
    cashRegister:{
        type: Number,
        // required: true
    },
    description:{
        type: String,
    },
},
{ timestamps: true }
);


module.exports = mongoose.model('DaySummary', DaySummarySchema);