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

    console.log('addNewTask');
    console.log('REQ.BODY: ', req.body);
    const newusers = new users(req.body);
    newusers
      .save()
      .then((result) => {
        // console.log('RESULT: ',result)
        // setTimeout(() => {
          res.json(result);
        // }, 2000);
      })
      .catch((err) => {
        console.log('ERR: ', err);
        res.json(err);
      });
 };
 const UserUpdate =(req,res)=>{
     UsersID =req.params.UsersID
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
    let UserId =req.params.UserId
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