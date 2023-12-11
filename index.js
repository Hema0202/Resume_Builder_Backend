require('dotenv').config()
const express = require('express');
const router = require('./src/routes/route');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');

mongoose.connect(process.env.MONGO_STRING).then(()=>{console.log("connected to database")}).catch((err)=>{console.log(err.message)})
app.use(express.json());
app.use(cors());
app.use('/',router);
app.listen(process.env.PORT || 3000,(err)=>{
    if(err) console.log(err.message);
    console.log('application is running on',process.env.PORT || 3000);
});