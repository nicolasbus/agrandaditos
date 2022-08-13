const mongoose = require('mongoose');

const SalesSchema = new mongoose.Schema({
    date:{
        type: String,
        required: true,
    },
    sale:{
        type: Number,
        required: true,
    },
    paymentMethod:{
        type: Array,
        required: true,
    },
    description:{
        type: String,
    },
},
{ timestamps: true }
);


module.exports = mongoose.model('Sales', SalesSchema);