const express = require('express');
const bodyParser = require('body-parser');
const https = require('https');
const { response } = require('express');
const app = express();
const axios = require("axios");
const http = require('http')

app.use(bodyParser.urlencoded({extended:true}))

app.get('/',(req,res)=>{
        res.sendFile(__dirname+"/index.html");
})






app.post("/",(req,res)=>{
    console.log(req.body);
    const query = "London"
    const apikey = "62042c9f43a0a2dc779353be172229a6";
    const unit = "metric";
    const url  = "https://api.openweathermap.org/data/2.5/weather?q="+query+",uk&appid="+apikey;

    const imageUrl = "https://picsum.photos/v2/list";

    https.get(imageUrl,(response)=>{
        console.log(response);

        response.on("data",(data)=>{
            console.log("data without parse is "+data);
            const requiredItem = JSON.parse(data);
            console.log(data[30]);
            console.log(requiredItem);
            

        })

    }).on("error",(e)=>{
        console.log("error generated ");
    })


      res.send('<img src="https://picsum.photos/id/237/200/300"/>');
    

})

http.get({
    hostname: 'localhost',
    port: 80,
    path: '/',
    agent: false  // Create a new agent just for this one request
  }, (res) => {
    // Do stuff with response
  });


app.listen(80,()=>{
    console.log('server is listening on port 3000 ');
})