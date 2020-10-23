const express = require("express");
const {GetAllAdmin,AdminCreate,AdminUpdate,AdminDelete}=require("./../Controller/Cont_Admin");


const Router_Admin = express.Router();
Router_Admin.get('/Admin/Get',(GetAllAdmin));
Router_Admin.post('/Admin/Create',(AdminCreate));
Router_Admin.put('/Admin/Update',(AdminUpdate));
Router_Admin.delete('/Admin/Delete',(AdminDelete));

module.exports = Router_Admin;
