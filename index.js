const express = require('express');
const router = require('./src/routes/route');
const app = express();
const mongoose = require('mongoose');

mongoose.connect("mongodb+srv://hemalohana8:KwLLh0p6frs8L5m0@cluster0.bff2piv.mongodb.net/").then(()=>{console.log("connected to database")}).catch((err)=>{console.log})
app.use(express.json());
app.use('/',router);
app.listen(process.env.PORT || 3000,(err)=>{
    if(err) console.log(err.message);
    console.log('application is running on',process.env.PORT || 3000);
});