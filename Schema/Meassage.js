const mongoose = require("mongoose");



const Meassage = new mongoose.Schema({
    name: { type: String, required: true,  },
    email: { type: String, required: true,  },
    Subject:{type:Number,required},
    meassage:{type:Number,required:true}
});


module.exports=mongoose.model('Message',Meassage);