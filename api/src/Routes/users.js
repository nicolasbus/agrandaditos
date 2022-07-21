const express = require('express');
const router = express.Router();
const User = require('../models/Users')
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')
const {verifyToken, verifyTokenAndAuthorization, verifyTokenAndAdmin} = require("./verifyToken")

router.get("/", async function (req, res) {
    try{  
        const document = await User.find()
        res.json(document)
    }catch(err){
        console.log(err)
    }
})


router.get('/:id', async function (req,res,next){
    try{ 
        const document = await User.findById({_id:req.params.id})
        res.json(document);
    }catch(err){
        console.log(err)
    }
})

router.post('/register', async function (req, res, next) {
    try{
        console.log(req.body)
        const newUser = new User({
        username: req.body.username,
        email: req.body.email,
        password: req.body.password,
        isAdmin: req.body.isAdmin
    });
    const document = await newUser.save();
    res.json(document)    
}catch(err){
    console.log(err);
    next()
}
})

//LOGIN
router.post('/login', async (req,res)=>{
    try{
        const user = await User.findOne({email:req.body.email})
        if(!user){
            res.status(401).json({message:"usuario no encontrado"})
        }if(bcrypt.compareSync(req.body.password,user.password)){
            const payload = {
                userId:user._id,
                isAdmin:user.isAdmin }
            const token = jwt.sign(payload,"123",{expiresIn:"3d"})
            const { ...others } = user._doc;  
            res.status(200).json({...others,token})
        }else{
            res.status(401).json({message:"Contraseña incorrecta"})
        }
    }catch(err){
        console.log(err)
    }
})

//UPDATE
router.put('/:id', async (req,res) =>{
    if (req.body.password) {
        req.body.password = bcrypt.hashSync(req.body.password,10).toString();
      }
    try{ 
          const document = await User.findByIdAndUpdate(req.params.id,

            {
              $set: req.body,
            },
            { new: true }
          );
        res.json(document)
    }catch(err){
        res.status(500).json(err)
    }


})

//DELETE
router.delete('/:id',verifyTokenAndAuthorization,async function(req, res) {
    try{
        const document = await User.deleteOne({_id:req.params.id},req.body);
        res.json(document);
    }catch(err){
        console.log(err)
    }
})

// GET USER STATS
router.post("/stats", async (req, res) => {
    const date = new Date();
    const lastYear = new Date(date.setFullYear(date.getFullYear() - 1));
  
    try {
      const data = await User.aggregate([
        { $match: { createdAt: { $gte: lastYear } } },
        {
          $project: {
            month: { $month: "$createdAt" },
          },
        },
        {
          $group: {
            _id: "$month",
            total: { $sum: 1 },
          },
        },
      ]);
      res.status(200).json(data)
    } catch (err) {
      res.status(500).json(err);
    }
  });
  



module.exports = router;
