 const express = require('express')
// sjhfoaij
 const app = express();
 app.get("/about",function(req,res){
    res.send("hello this is response asfga /about");
})
app.get("/",function(req,res){
    res.sendFile(__dirname+"/index.html");
})

// use nodemon all the time 

 app.listen(80,function(){
     console.log('app started this is chanmge ');
     
 });