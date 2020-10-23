const mongoose = require("mongoose");


const Prodects = new mongoose.Schema({
    name: { type: String, required: true,  },
    Type:{type:String,required:true},
    NumProdect:{type:Number,required},
    Price:{type:Number,required:true}
});


module.exports=mongoose.model('Prodects',Prodects);