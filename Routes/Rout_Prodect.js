const express = require("express");
const {GetAllProdects,ProdectsCreate,ProdectsUpdate,ProdectsDelete}=require("./../Controller/Cont_Prodect");


const Router_Prodects = express.Router();
Router_Prodects.get('/Prodects/Get',(GetAllProdects));
Router_Prodects.post('/Prodects/Create',(ProdectsCreate));
Router_Prodects.put('/Prodects/Update',(ProdectsUpdate));
Router_Prodects.delete('/Prodects/Delete',(ProdectsDelete));

module.exports = Router_Prodects;