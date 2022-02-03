const express = require('express');
const bodyParser = require('body-parser');
 
const app = express();
app.set('view engine', 'ejs');  // it will looks for views folder
app.use(bodyParser.urlencoded({extended:true}));  // it specifies that we are using body parsor soo that now we can use ha ha
app.use(express.static("public")); // to get static files like css and all , bcz in future we are going to deal with server so need a folder publuic in which all files a server can serve ha ha

var items = ["buy food","Cook food","Eat food ha ha"];
app.get('/',(req,res)=>{
    // res.send("hello ha ha"); // response from server 
    var day ="";
    var today = new Date();
   
    var options ={
        weekday:"long",
        day:"numeric",
        month:"long"
    }
    var day = today.toLocaleDateString("en-us",options);
   res.render("list",{kindofday:day,newListItems:items});

})

app.post("/",(req,res)=>{
   var item = req.body.newItem;
     items.push(item)
    console.log(item);
    res.redirect("/");

})



app.listen(80,()=>{
    console.log('post started on 80 ha ha');
    
})
