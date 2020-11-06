const mongoose = require("mongoose");


const News =new mongoose.Schema({
    email: { type: String, required: true },
    name : { type: String, required: true }
  });


  module.exports=mongoose.model('News',News);

