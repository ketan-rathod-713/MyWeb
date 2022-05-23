// make calculator on server
const express = require('express');
const bodyParser = require('body-parser'); //for using texfield may be checkOut
const app = express();

app.use(bodyParser.urlencoded({extended:true}));  // to get info from post 

app.get("/",function(req,res){
    console.log(__dirname)
    res.sendFile(__dirname + "/index.html")
})

app.post("/",function(req,res){
    // res.send("this is calculator")
    var num1 = Number(req.body.num1)  // as body parser gives text so to make it number 
    var num2 = Number(req.body.num2)
var result = num1 + num2;

var date = Date();
res.send("the result is " + result)
})

app.get("/bmicalculator",function(req,res){
    res.sendFile(__dirname + "/bmicalculator.html")
})

app.post("/bmicalculator",function(req,res){
    var w = parseFloat(req.body.weight) // to parse value in float as we get it as 
// string may be 
    var h = parseFloat(req.body.height)
    var bmi = w/(h*h);
    res.send("the bmi is "+ bmi)
})

app.listen(3000,function(){
    console.log("server running on 3000")
});

// naming num1 heree comes from name attribute in form 

// install body parser to parse the info from post req.