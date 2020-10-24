
const mongoose = require("mongoose");


const Admin = new mongoose.Schema({
  
    email: { type: String, required: true,require:true  },
    password: { type: String, required: true },
  });


  module.exports = mongoose.model('Admin',Admin);