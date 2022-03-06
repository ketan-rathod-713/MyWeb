const express = require("express")
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const ejs = require('ejs')

const app = express();

app.set('view engine','ejs');

app.use(bodyParser.urlencoded({extended:true}))

app.use(express.static("public"));

mongoose.connect("mongodb://localhost:27017/wikiDB",{useNewUrlParser:true})

const schema = {
    title:String,
    content:String
}

const Article = mongoose.model("article",schema);

const doc1 = {
    title:"first",
    content:"just trial"
}

app.get("/",(req,res)=>{
    res.send("just trial")
})

Article.insertMany([doc1]);


const port = 80;
app.listen(port,function(){
    console.log('listing on '+port);
    
})