const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const Users = new mongoose.Schema({
  
  email: { type: String },
  name: { type: String},
  password: { type: String},
  phoneNumber: { type: Number},
});

Users.pre("save", async function () {
  this.email = this.email.toLowerCase();
  if (this.isModified("password")) {
    this.password = await bcrypt.hash(this.password, 10);
  }
});
module.exports=mongoose.model('Users',Users);