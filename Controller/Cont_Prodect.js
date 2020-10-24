const express = require("express");
const Prodects =require("./../Schema/Prodects");


const GetAllProdects =(req,res)=>{
    Prodects.find({})
    .then((result) => {
        res.json(result);
    })

    .catch((err) => {
        res.json('Error while find all Prodects');

    })
};
  const ProdectsCreate =(req,res)=>{

    let Prodect1 =new Prodects({    
        name:req.body.name,
        Type:req.body.Type,
        NumProdect:req.body.NumProdect,
        Price:req.body.Price
    })
    Prodect1.save()
    .then((result)=>{
        res.json(result);
    })
    .catch((err)=>{
        res.json("an Error")
    })
 };
 const ProdectsUpdate =(req,res)=>{
     ProdectsID =req.body.ProdectsID
     let UpdateData={
        email:req.body.email,
        name: req.body.name,
       password:req.body.password ,
       phoneNumber:req.body.phoneNumber
     }
     Prodects.findByIdAndUpdate(ProdectsID,{$set:UpdateData})
     .then(()=>{
         res.json("Update in Prodects DataBase")
         .catch((err)=>{
             res.json(err);
         })
     })
};
const ProdectsDelete=(req,res)=>{
    let ProdectsID =req.body.ProdectsID
    Prodects.findByIdAndRemove(ProdectsID)
    .then(()=>{
      res.json("Remove And DataBase")
    })
    .catch((err)=>{
      res.json("An Error")
    })
};


module.exports={
    GetAllProdects,
    ProdectsCreate,
    ProdectsUpdate,
    ProdectsDelete
}