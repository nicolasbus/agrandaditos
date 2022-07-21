const express = require('express');
const router = express.Router();
const Order = require('../models/Order')
const {verifyToken, verifyTokenAndAuthorization, verifyTokenAndAdmin} = require("./verifyToken")



//GET ALL 
router.get("/",verifyTokenAndAdmin, async function (req, res) {
    try{  
        const document = await Order.find()
        res.status(200).json(document)    
    }catch(err){
        res.status(500).json(err)    
    }
})

//GET USER ORDERS
router.get("/:userId", verifyTokenAndAuthorization, async function (req, res) {
    try{  
        const document = await Order.find({userId:req.params.userId})
        res.status(200).json(document)    
    }catch(err){
        res.status(500).json(err)   
 }
})

//CREATE VERIFYTOKEN
router.post('/',async function (req, res) {
    const newOrder = new Order(req.body);
    try{   
    const document = await newOrder.save();
    res.status(200).json(document)    
    }catch(err){
    res.status(500).json(err)    
}
})

//UPDATE 
router.put("/:id", verifyTokenAndAdmin, async function (req, res) {
    try{  
        const document = await Order.updateOne({_id:req.params.id}, req.body)
        res.status(200).json(document)    
    }catch(err){
        res.status(500).json(err)    
    }
})

//DELETE 
router.delete("/:id", verifyTokenAndAdmin,async function (req, res) {
    try{  
        await Order.findByIdAndDelete({_id:req.params.id})
        res.json("La orden ha sido eliminada")
    }catch(err){
        res.status(500).json(err)    
    }
})

//GET MONTHLY INCOME
router.post("/income", verifyTokenAndAdmin, async (req, res) => {
    const date = new Date();
    const lastMonth = new Date(date.setMonth(date.getMonth() - 1));
    const previousMonth = new Date(new Date().setMonth(lastMonth.getMonth() - 1));
  
    try {
      const income = await Order.aggregate([
        { $match: { createdAt: { $gte: previousMonth } } },
        {
          $project: {
            month: { $month: "$createdAt" },
            sales: "$amount",
          },
        },
        {
          $group: {
            _id: "$month",
            total: { $sum: "$sales" },
          },
        },
      ]);
      res.status(200).json(income);
    } catch (err) {
      res.status(500).json(err);
    }
  });

module.exports = router;