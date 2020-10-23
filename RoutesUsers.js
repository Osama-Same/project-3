const express = require("express");
const User = require("./ModelsUsers");

// show the  list of Users
const authRouter = express.Router();

 authRouter.get('/',(req,res,next)=>{
    User.find({})
    .then((result) => {
      res.json(result);
    })
    .catch((err) => {
      res.json('error while find all users');
    });
})

 authRouter.post('/store',(req,res)=>{
    let User_ID=req.body.User_ID 
    User.findById(User_ID).exec()
    .then((result)=>{
        res.json(result)
    })   
    .catch((err)=>{
        res.json({massage:'An error Occured'});
    })
 })
 authRouter.post('/show',(req,res,next)=>{
    let User1=new User({
        name:req.body.name,
        email:req.body.email,
        password:req.body.password,
        phoneNumber:req.body.phoneNumber
      })
      User1.save()
      .then((result) =>{
      res.json(result)
  })
    .catch(err =>{
      res.json({message:'an error'})
    })
 })
 authRouter.put('/Update',(req,res,next)=>{
    let User_ID=req.body.User_ID 
    let updateDate ={
     name:req.body.name,
     email:req.body.email,
     password:req.body.password,
     phoneNumber:req.body.phoneNumber
   
    };   
     User.findByIdAndUpdate(User_ID,{$set:updateDate})
     .then(() =>{
    res.json( "Update Users");
  })
    .catch((err) =>{
      res.json({message:'an error'})
    })
 })
   authRouter.delete('/Delete',(req,res,next)=>{
    let User_ID=req.body.User_ID 
   User.findByIdAndRemove(User_ID)
   .then(()=>{
     res.json({
       message:'User and Delete'
     })
   })
     .catch((err) =>{
       res.json({
         message:'An error'
       })
     })
    })
module.exports = authRouter;
