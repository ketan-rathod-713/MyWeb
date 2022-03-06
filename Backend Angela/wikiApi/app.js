const express = require("express")
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const ejs = require('ejs');
const { fileLoader } = require("ejs");

const app = express();

app.set('view engine','ejs');

app.use(bodyParser.urlencoded({extended:true}));

app.use(express.static("public"));

mongoose.connect("mongodb://localhost:27017/wikiDB")

const articleSchema = {
    title:String,
    content:String
}

const Article = mongoose.model("article",articleSchema);

const doc1 = {
    title:"first",
    content:"just trial"
}
// Article.insertMany([doc1]);

app.get("/articles",(req,res)=>{
    Article.find(function(err,foundArticles){
        if(err) res.send(err);
        else
        res.send(foundArticles)
    })
})

app.post("/articles",(req,res)=>{
    console.log(req.body.title);
    console.log(req.body.content);
})

app.post("/",function(req,res){
    console.log(req.body);
    res.send("hello")
})

const port = 80;
app.listen(port,function(){
    console.log('listening on '+port);
    
})