const express = require("express");

const app =express();
const port = 80;

//for serving static files
app.use('/static',express.static('static'));

//for setting the template as pug
app.set('view engine','pug');

app.get("/",(req, res)=>{
    res.send("this is homepage of my first express app with harry")

});
app.get("/about",(req, res)=>{
    res.send("this is about homepage of my first express app with harry")

});



app.listen(port,()=>{
    console.log(`the app started successfully on port ${port}` )
})