const express = require('express')
const bodyParser = require('body-parser')
const request = require('request')
const https = require('https')
// const { options } = require('nodemon/lib/config')
const app = express()

app.use(bodyParser.urlencoded({extended:true}))

app.get("/",(req,res)=>{
    res.sendFile(__dirname+"/signup.html")
})

app.post("/",(req,res)=>{
    const firstname = req.body.fname
    const lastname = req.body.lname
    const email = req.body.email

    // write all keys that mailchimp want 
    var data = {
        members : [
            {
                email_address:email,
                status:"subscribed",
                merge_fields:{
                    FNAME:firstname,
                    LNAME:lastname
                }
            }
        ]
    }

var jsonData = JSON.stringify(data);

// previously we used http request and inside that on method but here we want to post data to the external user
const url = "https://us20.api.mailchimp.com/3.0/lists/49e756a683" 

const options = {
    method:"POST",
    auth:"angela:9985a53f0da38d713454a6d8ef396f2e-us20"
}



const request = https.request(url,options,function(response){
    if(response.statusCode){
        res.sendFile(__dirname+"/success.html")
    } else{
        res.send("not successfully subscribed")
    }
    response.on("data",function(data) {
        console.log(JSON.parse(data));
    })
})

request.write(jsonData);   // to send data to the mailchimp
request.end(); 

})

app.post("/failure",function(req,res){
    res.redirect("/");  // now it will display the same login page as that of first 
})

//9985a53f0da38d713454a6d8ef396f2e-us20
// 49e756a683
app.listen(process.env.PORT || 3000,()=>{ // if we want to work on both heroku and local 
    console.log("server is listening on port 3000 ");
})



// we can even make it more complicated 