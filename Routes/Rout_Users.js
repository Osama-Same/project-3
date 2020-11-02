const express = require("express");
const {GetAllUser,UsersCreate,UserUpdate,UserDelete}=require("./../Controller/Cont_Users");


const Router_Users = express.Router();
Router_Users.get('/Users/Get',(GetAllUser));
Router_Users.post('/Users/Create',(UsersCreate));
Router_Users.put('/Users/Update/:UsersID',(UserUpdate));
Router_Users.delete('/Users/Delete/:UserId',(UserDelete));

module.exports = Router_Users;