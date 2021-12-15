const express = require('express')
const bodyParser = require('body-parser')
const app = express()

app.use(bodyParser.urlencoded({extended:true}))

app.get('/',(req,res)=>{
    // write some logic code 

    var today = new Date();
    if(today.getDay()=== 6 || today.getDay()===0){
        res.write("<h1>yeah its weekend</h1>")
        res.send()
    } else{

        res.sendFile(__dirname+"/index.html")
    }

})





app.listen(3000,()=>{
console.log('server is listening on port 3000 ');
})