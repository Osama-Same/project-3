
const mongoose = require("mongoose");


const Users = new mongoose.Schema({
  email: { type: String, required: true,unique:true },
  name: { type: String, required: true,  },
  password: { type: String, required: true },
  phoneNumber: { type: Number, required: true,},
});
const Admin = new mongoose.Schema({
  email: { type: String, required: true,require:true  },
  password: { type: String, required: true },
});

const admin=mongoose.model("Project_3_Admin",Admin);

const users = mongoose.model('Project_3_Users', Users);
  
module.exports={users,admin}
  
  