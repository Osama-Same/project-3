const express = require("express");

const {GetAllLogin,CreateLogin}=require("./../Controller/cont_Login");


const Router_Login = express.Router();
Router_Login.get('/Login/Get',(GetAllLogin));
Router_Login.post('/Login/Post',(CreateLogin));
module.exports = Router_Login;


