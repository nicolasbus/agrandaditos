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

//FILTER 
router.get("/",async (req,res)=>{
  const {texto} = req.params
  let products = await Product.find({name: new RegExp('^'+texto+'$',"i")})
  res.json(products)
})

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


//GET ONE
router.get("/:id", async function (req, res) {
    try{  
        const document = await Product.findById(req.params.id)
        res.json(document)
    }catch(err){
        console.log(err)
    }
})

//NEW PRODUCT
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

//UPDATE PRODUCT
router.put("/:id", async function (req, res) {
    try{  
        const document = await Product.updateMany({_id:req.params.id}, req.body)
        res.json(document)
    }catch(err){
        console.log(err)
    }
})

///ADD PRODUCT
router.route("/add/:id").put(function(req, res) {
  document = Product.updateOne(
    { _id:req.params.id},
    { $push:  req.body  },
    function(err, document) {
      if (err){ 
        res.json(err);
      } else {
        res.json(document);
      }
    }
  );
});

//DISCOUNT PRODUCT
router.route("/discount/:id").put(function(req, res) {
  document = Product.updateOne(
    { _id:req.params.id},
    { $pull: req.body  },
    function(err, document) {
      if (err) {
        res.json(err);
      } else {
        res.json(document);
      }
    }
  );
});

//DELETE PRODUCT
router.delete("/:id", async function (req, res) {
    try{  
        const document = await Product.deleteOne({_id:req.params.id})
        res.json(document)
    }catch(err){
        console.log(err)
    }
})

//GET PRODUCT DATA
router.post('/productdata',(req,res)=>{
  Product.find({_id:req.body._id}, function(docs,err)
 { if(!err){
    res.send(docs)
  }else{
    res.send(err)
  }})
})

// //UPDATE USER NEW
// router.post('/update',(req,res)=>{
//   Product.findOneAndUpdate({_id:req.params._id},{
//     title: req.body.title,
//     brand: req.body.brand,
//     price: req.body.price,
//     color: req.body.color,
//     size: req.body.size,
//     categories: req.body.categories,
//     img: req.body.img,
//     inStock: req.body.inStock
//   },(err)=>{
//     if(!err){
//       res.json("successfull")
//     }else{
//       res.send(err)
//     }
//   }
//   )
// })


module.exports = router;