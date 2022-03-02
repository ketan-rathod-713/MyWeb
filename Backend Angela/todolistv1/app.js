const express = require('express');
const bodyParser = require('body-parser');
// const date = require(__dirname+"/date.js");  // just see it when need to export and make simple things in different file to keep it clean
const mongoose = require('mongoose');
// console.log(date());

mongoose.connect("mongodb://localhost:27017/todolistdb",{useNewUrlParser:true})

// now make schema 
const itemSchema = {
    name:String
};
// Then make model of it 
const Item =  mongoose.model("item",itemSchema);

const app = express();
app.set('view engine', 'ejs');  // it will looks for views folder
app.use(bodyParser.urlencoded({extended:true}));  // it specifies that we are using body parsor soo that now we can use ha ha
app.use(express.static("public")); // to get static files like css and all , bcz in future we are going to deal with server so need a folder publuic in which all files a server can serve ha ha

// var items = ["buy food","Cook food","Eat food ha ha"];
// let workItems = []; // This is unused after mongodb ha ha :)

// make a doc. out of model
const doc1 = new Item({
    name:"Eat the food"
})
const doc2 = new Item({
    name:"Eat the foods"
})
const doc3 = new Item({
    name:"Eat the banana"
})


app.get('/',(req,res)=>{
    // var day ="";
//    let day = date.getDate();
Item.find(function(err,items){
    if(items.length === 0){
        Item.insertMany([doc1,doc2,doc3]); // here callback function also 
        res.redirect("/");  // this is what we need to do in coding :)
    }
        res.render("list",{listTitle:"Today",newListItems:items});
    })
  

})

app.post("/",(req,res)=>{
   var item = req.body.newItem;

//    if(req.body.list=="work"){
//        workItems.push(item);
//        res.redirect("/work")
//    } else{ 
       // need to add that item in database 
       let itemdoc = new Item({
           name:item
       })
       Item.insertMany([itemdoc]);

    res.redirect("/");


    // items.push(item); // here we are adding new item to items ha ha
    // console.log(item);
   
})


app.post("/delete",(req,res)=>{
    console.log(req.body);
    let checkedItemId = req.body.checkbox;
    Item.findByIdAndRemove(checkedItemId,function(err){
        if(err) console.log(err);
        else
        console.log('succes');
        
    }) 
    res.redirect("/");
})

app.get("/work",(req,res)=>{
    res.render("list",{listTitle:"work list",newListItems:workItems})
})

app.post("/work",(req,res)=>{
    let item = req.body.newItem;
    workItems.push(item);
    console.log(req.body);
    
    res.redirect("/work");
})


app.get("/about",(req,res)=>{
    res.render("about");
})

app.listen(80,()=>{
    console.log('post started on 80 ha ha');
    
})
