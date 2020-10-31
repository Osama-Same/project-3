const express = require('express');
const routerAdmin = require('./Routes/Rout_Admin');
const routerUsers = require('./Routes/Rout_Users');
const routerProdect=require('./Routes/Rout_Prodect')
//const routerNews   =require('./Routes/Rout_News');
//const routerMassage=require('./Routes/Rout_Meassage');

require('dotenv').config();


const app = express();

app.use(express.json());
app.use(routerAdmin);
app.use(routerUsers);
app.use(routerProdect);
//app.use(routerNews);
//app.use(routerMassage);

const mongoose = require("mongoose");
const options = {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
  };
  
   mongoose.connect(process.env.DB_URI, options)
    .then(() => {
      console.log('DB READY TO USE',process.env.DB_URI);
    })
    .catch((err) => {
      console.log('ERR: ', err);
    });
 
    // connecting mongoose
    const connection = mongoose.connect(process.env.DB_URI, options)
   
    

const PORT = 5000 || process.env.PORT;
app.listen(PORT, () => console.log(`listening at http://localhost:${PORT}`));