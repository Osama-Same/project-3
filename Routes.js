const express = require("express");
const {users,admin} = require("./Models");


const Router = express.Router();

 Router.get('/User/Get',(req,res,next)=>{
    users.find({})
    .then((result) => {
      res.json(result);
    })
    .catch((err) => {
      res.json('error while find all users');
    });
})

 Router.post('/User/FindId',(req,res)=>{
    let User_ID=req.body.User_ID 
    users.findById(User_ID).exec()
    .then((result)=>{
        res.json(result)
    })   
    .catch((err)=>{
        res.json({massage:'An error Occured'});
    })
 })
 Router.post('/User/Create',(req,res,next)=>{
    let User1=new users({
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
 Router.put('/User/Update',(req,res,next)=>{
    let User_ID=req.body.User_ID 
    let updateDate ={
     name:req.body.name,
     email:req.body.email,
     password:req.body.password,
     phoneNumber:req.body.phoneNumber
   
    };   
     users.findByIdAndUpdate(User_ID,{$set:updateDate})
     .then(() =>{
    res.json( "Update Users");
  })
    .catch((err) =>{
      res.json({message:'an error'})
    })
 })
 Router.delete('/User/Delete',(req,res,next)=>{
    let User_ID=req.body.User_ID 
   users.findByIdAndRemove(User_ID)
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

 

    
 Router.get('/Admin/Get',(req,res,next)=>{
      admin.find({})
      .then((result) => {
        res.json(result);
      })
      .catch((err) => {
        res.json('error while find all users');
      });
  })
 Router.post('/Admin/Post',(req,res)=>{
   let Admin1 =new admin({
    email:req.body.email,
    password:req.body.password
   })
   Admin1.save()
   .then((result)=>{
     res.json(result);
   })
   .catch((err)=>{
     res.json("an Error")
   })
 })
 Router.delete('/Admin/Delete',(req,res)=>{
     let AdminId =req.body.AdminId
     admin.findByIdAndRemove(AdminId)
     .then(()=>{
       res.json("Remove And DataBase")
     })
     .catch((err)=>{
       res.json("An Error")
     })
 })   
 
 module.exports = Router;