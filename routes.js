const express = require("express");
const { register, login, getUsers } = require("./controller");
const middleware = require("./middlewares");

const authRouter = express.Router();


 authRouter.get("/aa",(req,res)=>{
  console.log("gggg"); 
 })


module.exports = authRouter;
