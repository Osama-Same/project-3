const mongoose = require("mongoose");
const bcrypt = require("bcrypt");


const Login = new mongoose.Schema({
    email: { type: String, required: true,require:true},
    password: { type: String, required: true  }
});
Login.pre("save", async function () {
    this.email = this.email.toLowerCase();
    if (this.isModified("password")) {
      this.password = await bcrypt.hash(this.password, 10);
    }
  });

module.exports=mongoose.model('Login',Login);