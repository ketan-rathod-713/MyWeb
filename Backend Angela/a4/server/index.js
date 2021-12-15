 const express = require('express')

 const app = express();
 app.get("/about",function(req,res){
    res.send("hello this is response asfga");
})
app.get("/",function(req,res){
    res.send("hello this is response in about abd nidemon");
})

// use nodemon all the time 

 app.listen(3000);