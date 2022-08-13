const express = require('express');
const router = express.Router();
const DaySummary = require('../models/DaySummary')


//GET ALL SALES
router.get("/", async (req, res) => {
    const qNew = req.query.new;
    const qCategory = req.query.category;
    try {
      let daySummary;
  
      if (qNew) {
        daySummary = await DaySummary.find().sort({ createdAt: -1 }).limit(1);
      } else if (qCategory) {
        daySummary = await DaySummary.find({
          categories: {
            $in: [qCategory],
          },
        });
      } else {
        daySummary = await DaySummary.find();
      }
  
      res.status(200).json(daySummary);
    } catch (err) {
      res.status(500).json(err);
    }
  });

  //


//GET ONE
router.get("/:id", async function (req, res) {
    try{  
        const document = await DaySummary.findById(req.params.id)
        res.json(document)
    }catch(err){
        console.log(err)
    }
})

//NEW PRODUCT
router.post('/add', async function (req, res) {
    try{   const newDaySummary = new DaySummary({
        date: req.body.date,
        cash: req.body.cash,
        card: req.body.card,
        transfer: req.body.transfer,
        total: req.body.total,
        cashRegister: req.body.cashRegister,
        description: req.body.description,
    });
    const document = await newDaySummary.save();
    res.json(document)}
    catch(err){
        console.log(err)
    }
})

//UPDATE PRODUCT
router.put("/:id", async function (req, res) {
    try{  
        const document = await DaySummary.updateMany({_id:req.params.id}, req.body)
        res.json(document)
    }catch(err){
        console.log(err)
    }
})



//DELETE PRODUCT
router.delete("/:id", async function (req, res) {
    try{  
        const document = await DaySummary.deleteOne({_id:req.params.id})
        res.json(document)
    }catch(err){
        console.log(err)
    }
})





module.exports = router;