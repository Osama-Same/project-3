const express = require("express");
const users =require("./../Schema/Users");


const GetAllUser =(req,res)=>{
    users.find({})
    .then((result) => {
        res.json(result);
    })

    .catch((err) => {
        res.json('Error while find all Admin');

    })
};
  const UsersCreate =(req,res)=>{

    let Users1 =new users({    
        email:req.body.email,
        password:req.body.password
    })
    Users1.save()
    .then((result)=>{
        res.json(result);
    })
    .catch((err)=>{
        res.json("an Error")
    })
 };

const UserDelete=(req,res)=>{
    let UserId =req.body.AdminId
    users.findByIdAndRemove(UserId)
    .then(()=>{
      res.json("Remove And DataBase")
    })
    .catch((err)=>{
      res.json("An Error")
    })
};

const UserUpdate =()=>{

    let User_ID=req.body.User_ID 

    let updateDate ={
        email:req.body.email,
        password:req.body.password
};   
  users.findByIdAndUpdate(User_ID,{$set:updateDate})
        .then(() =>{
            res.json( "Update Users");
        })
        .catch((err) =>{
            res.json({message:'an error'})
        })
};
module.exports={
    GetAllUser,
    UsersCreate,
    UserUpdate,
    UserDelete
}