require('dotenv').config();
console.log(process.env.SECRET) // remove this after you've confirmed it working
// put it as top as we require variable to be accessed from anywhere 
const express = require('express');
const bodyParser = require('body-parser');
const ejs = require('ejs');
const app = express();
const mongoose = require('mongoose')
const encrypt = require('mongoose-encryption')

app.use(express.static('public'));
app.set('view engine','ejs');
app.use(bodyParser.urlencoded({extended:true}));

mongoose.connect("mongodb://localhost:27017/userDB")

const userSchema = new mongoose.Schema({
    email:String,
    password:String
});

// const secret = "Thisisourlittlesecret.";

userSchema.plugin(encrypt, { secret: process.env.SECRET ,encryptedFields: ['password']});
// we have to make this plugin before model , read plugins in mongoose 
const User = mongoose.model("user",userSchema);
// whenever we find and save mongoose decrypt and encrypt accordingly


app.get("/",(req,res)=>{
    res.render("home");
})
app.get("/login",(req,res)=>{
    res.render("login");
})
app.get("/register",(req,res)=>{
    res.render("register")
})

app.post("/register",(req,res)=>{
    const newUser = new User({
        email:req.body.username,
        password:req.body.password
    });
    newUser.save(function(err){
        if(err)console.log(err);
        else
        res.render("secrets");
    });
})

app.post("/login",(req,res)=>{
    const username = req.body.username;
    const password = req.body.password;
    User.find({email:username},function(err,foundUser){
        if(err) console.log(err);
        else{
            if(foundUser){
                console.log(foundUser);
                
                if(foundUser[0].password===password){  // as here i am getting the array of objects not only one onject so need to do this [0]
                    res.render("secrets");
                } else{

                }
            }
        }
        
    })
})

let port = 80;
app.listen(port,function(req,res){
    console.log('port started on '+port);
    
})