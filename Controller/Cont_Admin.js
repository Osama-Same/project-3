const express = require("express");
const admin =require("./../Schema/Admin");


const GetAllAdmin =(req,res)=>{
    admin.find({})
    .then((result) => {
        res.json(result);
    })

    .catch((err) => {
        res.json('Error while find all Admin');

    })
};
  const AdminCreate =(req,res)=>{

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
 };
 const AdminUpdate =(req,res)=>{

    let Admin_ID=req.body.Admin_ID 

    let updateDate ={
        email:req.body.email,
        password:req.body.password
};   
  admin.findByIdAndUpdate(Admin_ID,{$set:updateDate})
        .then(() =>{
            res.json( "Update Admin in Data");
        })
        .catch((err) =>{
            res.json({message:'an error'})
        })
};
const AdminDelete=(req,res)=>{
    let AdminId =req.body.AdminId
    admin.findByIdAndRemove(AdminId)
    .then(()=>{
      res.json("Remove And DataBase")
    })
    .catch((err)=>{
      res.json("An Error")
    })
};


module.exports={
    GetAllAdmin,
    AdminCreate,
    AdminDelete,
    AdminUpdate
}