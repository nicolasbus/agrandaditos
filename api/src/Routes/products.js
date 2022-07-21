const express = require('express');
const router = express.Router();
const Product = require('../models/Product')

// router.get("/", async function (req, res) {
//     try{  
//         const document = await Product.find()
//         res.json(document)
//     }catch(err){
//         console.log(err)
//     }
// })


//GET ALL PRODUCTS
router.get("/", async (req, res) => {
    const qNew = req.query.new;
    const qCategory = req.query.category;
    try {
      let products;
  
      if (qNew) {
        products = await Product.find().sort({ createdAt: -1 }).limit(1);
      } else if (qCategory) {
        products = await Product.find({
          categories: {
            $in: [qCategory],
          },
        });
      } else {
        products = await Product.find();
      }
  
      res.status(200).json(products);
    } catch (err) {
      res.status(500).json(err);
    }
  });

  //



router.get("/:id", async function (req, res) {
    try{  
        const document = await Product.findById(req.params.id)
        res.json(document)
    }catch(err){
        console.log(err)
    }
})

router.post('/add', async function (req, res) {
    try{   const newProduct = new Product({
        title: req.body.title,
        brand: req.body.brand,
        price: req.body.price,
        color: req.body.color,
        size: req.body.size,
        categories: req.body.categories,
        img: req.body.img,
        inStock: req.body.inStock
    });
    const document = await newProduct.save();
    res.json(document)}
    catch(err){
        console.log(err)
    }
})

router.put("/:id", async function (req, res) {
    try{  
        const document = await Product.updateOne({_id:req.params.id}, req.body)
        res.json(document)
    }catch(err){
        console.log(err)
    }
})

router.delete("/:id", async function (req, res) {
    try{  
        const document = await Product.deleteOne({_id:req.params.id})
        res.json(document)
    }catch(err){
        console.log(err)
    }
})
module.exports = router;