const { json } = require('body-parser');
const { response } = require('express');
const bodyParser = require('body-parser')
const express = require('express');
const https = require('https');

const app = express();

app.use(bodyParser.urlencoded({extended:true}))


app.get("/",function(req,res){
    res.sendFile(__dirname+"/index.html")
})

app.post("/",function(req,res){

    // const query = req.body.cityName;  // i dont know why this only works on london not on paris why ???
    const query = "London"
    const apikey = "62042c9f43a0a2dc779353be172229a6";
    const unit = "metric";
    const url  = "https://api.openweathermap.org/data/2.5/weather?q="+query+",uk&appid="+apikey;
        https.get(url,function(response){  // for no confusion between res we used response 
            
          
            response.on("data",function(data){  // when we recieve some data , why its not printed , i should be getting hexadecimal 
                const wheatherData = JSON.parse(data);   // it will convert hexadecimal into one js object 
               
 console.log("rhis ");
                const temp  = wheatherData.main.temp
                const desc = wheatherData.weather[0].description
                const icon = wheatherData.weather[0].icon
                var iconurl = "http://openweathermap.org/img/wn/" + icon + "@2x.png"

        res.write("<h1> The wheather is currently "+ desc )  // we can have lots of write 
        // res.write("<h1>the temp in london is " + temp+" and </h1>")
        res.write("<img src="+iconurl+">")  // i domt know why this is not working and below onw is working , ohh now its working so this is thw good way to write this 
        res.send()  // we can have only one res.send but write as many times as can 
        
               })
        })
})


// now we are able to get dynamic data 






// app.get("/",function(req,res){
//     // res.sendFile(__dirname + "index.html");
//     // how to make request to external server  , this should have strict formatting 
//     const url  = "https://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=62042c9f43a0a2dc779353be172229a6";
//     https.get(url,function(response){  // for no confusion between res we used response 
//         console.log(response.statusCode);
      
//         response.on("data",function(data){  // when we recieve some data , why its not printed , i should be getting hexadecimal 
//             const wheatherData = JSON.parse(data);   // it will convert hexadecimal into one js object 
//                console.log(wheatherData);
//             // console.log(data); // it will give hexadecimal code so we need to parse it to json
//                console.log("this is on method");

//             const temp  =wheatherData.main.temp
//             // console.log(temp);
//             const desc = wheatherData.weather[0].description
//             // console.log(desc);
//             const icon = wheatherData.weather[0].icon
//             var iconurl = "http://openweathermap.org/img/wn/" + icon + "@2x.png"
//     res.write("<h1> The wheather is currently "+ desc )  // we can have lots of write 
//     res.write("<h1>the temp in london is " + temp+" and </h1>")
//     res.write("<img src="+iconurl+">")  // i domt know why this is not working and below onw is working , ohh now its working so this is thw good way to write this 
//     res.write("<img src='http://openweathermap.org/img/wn/04n@2x.png'>")
//     res.send()  // we can have only one res.send but write as many times as can 
    




//         //     const object ={
//         //         name : "angela",
//         //         hobby : "nothing"
//         //     }
//         //    console.log(JSON.stringify(object));  // it will make into json 
//            })
//     })



//     // res.send("this is on method inside get")  // we cant have more then one send
// })

app.listen(80,function(){
    console.log("server is running on 80")
})