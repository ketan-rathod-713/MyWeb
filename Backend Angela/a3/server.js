 const express = require('express');
// const res = require('express/lib/response');
 const app = express();

 app.get("/", function(request,response){
    response.send("hello");
 });

 app.listen(80, function(){
     console.log("this is call back function ")
 });

 // i sont know why but this is not working