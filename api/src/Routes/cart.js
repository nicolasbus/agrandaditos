const express = require('express');
const router = express.Router();
const Cart = require('../models/Cart')
const {verifyToken, verifyTokenAndAuthorization,verifyTokenAndAdmin} = require("./verifyToken")



//GET ALL  
router.get("/", verifyTokenAndAdmin,async function (req, res) {
    try{  
        const document = await Cart.find()
        res.status(200).json(document)
    }catch(err){
        res.status(500).json(err)    
    }
})

//GET USER CART
router.get("/:userId", verifyTokenAndAuthorization, async function (req, res) {
    try{  
        const document = await Cart.findOne({userId:req.params.userId})
        res.status(200).json(document)
    }catch(err){
        res.status(500).json(err)   
 }
})

//CREATE
router.post('/', verifyToken,async function (req, res) {
    const newCart = new Cart(req.body);
    try{   
    const document = await newCart.save();
    res.status(200).json(document)
}
    catch(err){
    res.status(500).json(err)    
}
})

//UPDATE
router.put("/:id", verifyTokenAndAuthorization, async function (req, res) {
    try{  
        const document = await Cart.updateOne({_id:req.params.id}, req.body)
        res.status(200).json(document)
    }catch(err){
        res.status(500).json(err)    
    }
})

//DELETE
router.delete("/:id", verifyTokenAndAuthorization,async function (req, res) {
    try{  
        await Cart.findByIdAndDelete({_id:req.params.id})
        res.status(500).json("El carro se ha vaciado")    
    }catch(err){
        console.log(err)
    }
})
module.exports = router;