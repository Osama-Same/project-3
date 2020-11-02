const mongoose = require("mongoose");


const Users = new mongoose.Schema({
  
  email: { type: String },
  name: { type: String},
  password: { type: String},
  phoneNumber: { type: Number},
});


module.exports=mongoose.model('Users',Users);