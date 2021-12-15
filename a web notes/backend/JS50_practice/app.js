
const path = require("path")
const express = require("express");
const fs = require("fs");
const exp = require("constants");
const port = 80;
const app = express();

let count = 0;

app.set('view engine','pug');
app.set('views',path.join(__dirname,'views'));


app.use(express.urlencoded());

app.post('/',(req,res)=>{
    count++;
   console.log(req.body.Name)
    res.render('demo.pug',{'message':"this is message"});
})

app.listen(port,()=>{
    console.log("app started successfully");
})