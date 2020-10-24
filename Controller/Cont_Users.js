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
        name: req.body.name,
       password:req.body.password ,
       phoneNumber:req.body.phoneNumber
    })
    Users1.save()
    .then((result)=>{
        res.json(result);
    })
    .catch((err)=>{
        res.json("an Error")
    })
 };
 const UserUpdate =(req,res)=>{
     UsersID =req.body.UsersID
     let UpdateDate={
        email:req.body.email,
        name: req.body.name,
       password:req.body.password ,
       phoneNumber:req.body.phoneNumber
     }
     users.findByIdAndUpdate(UsersID,{$set:UpdateDate})
     .then(()=>{
         res.json("Update in DataBase")
         .catch((err)=>{
             res.json(err);
         })
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


module.exports={
    GetAllUser,
    UsersCreate,
    UserUpdate,
    UserDelete
}