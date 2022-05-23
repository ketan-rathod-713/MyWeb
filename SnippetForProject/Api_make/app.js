const express = require('express');
const app = express();
const dotenv = require('dotenv');


// a simple api which gives this output 
app.get("/",(req,res)=>{
    console.log(process.env.MESSAGE_STYLE); // if working locally then required dotenv package 
    res.json({name:"name is here ",work:"I am engineer"});
})

app.listen(80,()=>{
    console.log('server started ');
})