
const mongoose = require("mongoose");


const Users = new mongoose.Schema({
  email: { type: String, required: true,unique:true },
  name: { type: String, required: true,  },
  password: { type: String, required: true },
  phoneNumber: { type: Number, required: true,},
});
const Admin = new mongoose.Schema({
  email: { type: String, required: true,  },
  password: { type: String, required: true },
});



module.exports = mongoose.model('Project_3_Users', Users);
  
  
  