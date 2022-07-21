const mongoose = require('mongoose');

const ProductsSchema = new mongoose.Schema({
    title:{
        type: String,
        required: true,
    },
    brand:{
        type: String,
    },
    price:{
        type: Number,
        required: true,
    },
    color:{
        type: Array,
    },
    size:{
        type: Array,
    },
    categories:{ 
        type: Array 
    },
    img:{ 
        type: String, 
        required: true },
    inStock:{
        type: Boolean, 
        default: true
    }
},
{ timestamps: true }
);


module.exports = mongoose.model('Products', ProductsSchema);