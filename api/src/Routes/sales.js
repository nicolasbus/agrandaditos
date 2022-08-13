const express = require('express');
const router = express.Router();
const Sale = require('../models/Sales')


//GET ALL SALES
router.get("/", async (req, res) => {
    const qNew = req.query.new;
    const qCategory = req.query.category;
    try {
      let sales;
  
      if (qNew) {
        sales = await Sale.find().sort({ createdAt: -1 }).limit(1);
      } else if (qCategory) {
        sales = await Sale.find({
          categories: {
            $in: [qCategory],
          },
        });
      } else {
        sales = await Sale.find();
      }
  
      res.status(200).json(sales);
    } catch (err) {
      res.status(500).json(err);
    }
  });

  //


//GET ONE
router.get("/:id", async function (req, res) {
    try{  
        const document = await Sales.findById(req.params.id)
        res.json(document)
    }catch(err){
        console.log(err)
    }
})

//NEW PRODUCT
router.post('/add', async function (req, res) {
    try{   const newSale = new Sale({
        date: req.body.date,
        sale: req.body.sale,
        paymentMethod: req.body.paymentMethod,
        description: req.body.description,
    });
    const document = await newSale.save();
    res.json(document)}
    catch(err){
        console.log(err)
    }
})

//UPDATE PRODUCT
router.put("/:id", async function (req, res) {
    try{  
        const document = await Product.updateMany({_id:req.params.id}, req.body)
        res.json(document)
    }catch(err){
        console.log(err)
    }
})



//DELETE PRODUCT
router.delete("/:id", async function (req, res) {
    try{  
        const document = await Sale.deleteOne({_id:req.params.id})
        res.json(document)
    }catch(err){
        console.log(err)
    }
})





module.exports = router;