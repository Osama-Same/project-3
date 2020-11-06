const express = require("express");
const Login =require("./../Schema/Login");


const GetAllLogin =(req,res)=>{
    Login.find({})
    .then((result) => {
        res.json(result);
    })

    .catch((err) => {
        res.json('Error while find all Admin');

    })
};
const CreateLogin =(req,res)=>{
    const newlogin = new Login(req.body);
    newlogin
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


module.exports={
    GetAllLogin,
    CreateLogin
}