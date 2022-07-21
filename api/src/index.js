const express = require('express');
const app = express();
MongoDB = require('./database')
const morgan = require('morgan');
const dotenv = require('dotenv');
const cors = require("cors");
var bodyParser = require('body-parser')

// require("dotenv").config();

//Settings
dotenv.config();
app.set('port',process.env.PORT || 3000);
app.use(bodyParser.json());


MongoDB();
//Middlewares
// app.use(morgan());
app.use(express.json());
app.use('/products',require('./Routes/products')) ;
app.use('/users',require('./Routes/users'));
app.use('/cart',require('./Routes/cart')) ;
app.use('/orders',require('./Routes/order'));
app.use('/mercadopago',require('./Routes/mercadopago'));
app.use(cors());
app.use(express.urlencoded({ extended: false }));

//Server
app.listen(app.get('port'), ()=>{
    console.log("Server en puerto", app.get('port'));
});