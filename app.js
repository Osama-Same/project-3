const express = require('express');
const router = require('./RoutesUsers');

require('dotenv').config();

const app = express();

app.use(express.json());
app.use(router);

const mongoose = require("mongoose");
const options = {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
  };
  // connecting mongoose
  const DB_URL = 'mongodb://localhost:27017/Project_3';
  
  mongoose
    .connect(DB_URL, options)
    .then(() => {
      console.log('DB READY TO USE');
    })
    .catch((err) => {
      console.log('ERR: ', err);
    });

    
    

const PORT = 3000 || process.env.PORT;
app.listen(PORT, () => console.log(`listening at http://localhost:${PORT}`));