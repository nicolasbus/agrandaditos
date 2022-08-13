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

const whiteList = ['http://localhost:3001']
MongoDB();
//Middlewares
// app.use(morgan());
app.use(express.json());
app.use('/products',require('./Routes/products')) ;
app.use('/users',require('./Routes/users'));
app.use('/cart',require('./Routes/cart')) ;
app.use('/orders',require('./Routes/order'));
app.use('/daysummary',require('./Routes/daySummary'));
app.use('/mercadopago',require('./Routes/mercadopago'));
app.use('/sales',require('./Routes/sales'));

app.use(cors({origin: whiteList}));
app.use(express.urlencoded({ extended: false }));

//Server
app.listen(app.get('port'), ()=>{
    console.log("Server en puerto", app.get('port'));
});