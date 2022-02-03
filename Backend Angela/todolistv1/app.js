const express = require('express');
const bodyParser = require('body-parser');
 
const app = express();
app.set('view engine', 'ejs');  // it will looks for views folder
app.use(bodyParser.urlencoded({extended:true}));  // it specifies that we are using body parsor soo that now we can use ha ha
var items = [];
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
   res.render("list",{kindofday:day,newItem:items});

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
