const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const http = require("http");
const fetch = require('node-fetch');
const https = require("https");
const app = express();
const axios = require("axios");
//1. Import coingecko-api
const CoinGecko = require("coingecko-api");
const { brotliCompress } = require("zlib");
//2. Initiate the CoinGecko API Client
const CoinGeckoClient = new CoinGecko();




// How to stream the data fuck off searched a lot but couldn't able to find so ask others 
 
// var request = require('request')
// var JSONStream = require('JSONStream')
// var es = require('event-stream')
 
// request({url: 'https://min-api.cryptocompare.com/data/pricemulti?fsyms=BTC,ETH,BUSD,SQL,BNB,XRP,TRX,SOL,ATOM,USDC,ADA,DOT,KNC,FTM,MATIC,LTC,SHIB,NEAR,SAND,XMP&tsyms=USD&api_key=c0686da4f1c5e7913524ca03adbd259e6e3392de2745292768dddbdefe556963'})
//   .pipe(JSONStream.parse('rows.*'))
//   .pipe(es.mapSync(function (data) {
//     console.error(data)
//     console.log(data);
    
//   }))


//3. Make calls

// CoinLayer API
// https://www.coingecko.com/en/api/documentation see this for better api

app.use(bodyParser.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.use(express.static("public"));



app.get("/", (req, res) => {
    var cryotoPrices = [{name:"BTC",value:2001}];
//   to get the cryptoPrices redirect to the cryotoPrices and return back ha ha fast can i do that
  const url ="https://min-api.cryptocompare.com/data/pricemulti?fsyms=BTC,ETH,BUSD,SQL,BNB,XRP,TRX,SOL,ATOM,USDC,ADA,DOT,KNC,FTM,MATIC,LTC,SHIB,NEAR,SAND,XMP&tsyms=USD&api_key=c0686da4f1c5e7913524ca03adbd259e6e3392de2745292768dddbdefe556963"  ;
       
      https.get(url,function(response){  // for no confusion between res we used response // inside the post or whenever we want to call it depends on us ..

      response.on("data",function(data){  // when we recieve some data , why its not printed , i should be getting hexadecimal
          const mydata = JSON.parse(data);   // it will convert hexadecimal into one js object
          console.log(mydata);

          const keys = Object.keys(mydata);
        // print all keys
        console.log(keys);
        // iterate over object
        keys.forEach((key, index) => {
          console.log(`${key}: ${mydata[key].USD}`);
          cryotoPrices.push({name:key,value:`${mydata[key].USD}`});
        });
          // do not push each time ha ha or delete previous one if
          
        
          })
  })


  // Another api step 2 ha ha 
  


  setTimeout(function() {            // this time i solve a little but getting results ha ha :)
    console.log("first function executed");
    res.render("home", { part2: cryotoPrices });
  }, 3000);
 
});

app.get("/youtubeCourses", (req, res) => {
  res.render("youtubeCourses");
});

app.get("/marketCap", (req, res) => {
    let arr = [{name:"bitcciga",symbol:"BTC",value:2481236}];
 

    const url =
      "https://min-api.cryptocompare.com/data/pricemulti?fsyms=BTC,ETH,BUSD,SQL,BNB,XRP,TRX,SOL,ATOM,USDC,ADA,DOT,KNC,FTM,MATIC,LTC,SHIB,NEAR,SAND,XMP&tsyms=USD&api_key=c0686da4f1c5e7913524ca03adbd259e6e3392de2745292768dddbdefe556963";
  
    https.get(url, function (response) {
      response.on("data",async function (data) {
        var arr2 = [];
        const mydata =await JSON.parse(data);
        console.log(mydata.BTC);
        const keys = Object.keys(mydata);
        // print all keys
        console.log(keys);
        // iterate over object
        keys.forEach((key, index) => {
          console.log(`${key}: ${mydata[key].USD}`);
          arr.push({name:"waht",symbol:key,value:`${mydata[key].USD}`});
        });
      });
    });
    
  setTimeout(function() {            // this time i solve a little but getting results ha ha :)
      console.log("first function executed");
      res.render("marketCap", { coins: arr });
    }, 3000);
});



app.get("/glossary", (req, res) => {
  res.render("glossary");
});



app.get("/trial", async (req, res) => {
  
    const url = "https://newsapi.org/v2/top-headlines?country=us&apiKey=168a5633e60e48caa97a7bd024717425";

    https.get(url, function (response) {
        response.on("data",async function (data) {
          var arr2 = [];
          const mydata =await JSON.parse(data);
          console.log(mydata.BTC);
          const keys = Object.keys(mydata);
          // print all keys
          console.log(keys);
          // iterate over object
          keys.forEach((key, index) => {
            console.log(`${key}: ${mydata[key].USD}`);
            // arr.push({name:"waht",symbol:key,value:`${mydata[key].USD}`});
          });
        });
      });


setTimeout(function() {            // this time i solve a little but getting results ha ha :)
    console.log("first function executed");
    res.render("trial", { part2: arr });
  }, 3000);

// ye pehle run ho raha he ha ha that's why error 
  
});


const fs = require('fs');
const { json } = require("stream/consumers");
const { title } = require("process");

var url ="https://cryptopanic.com/api/v1/posts/?auth_token=945d1e2144e8c43d82bdc2f5cdd819e0c0aaf41c&public=true&page=1";

app.get("/news2",async (req,res)=>{
  const resp = await fetch(url);
  const jsondata = await resp.json();
const arr = [];
  console.log(jsondata);
  
    for(let i=0;i<jsondata['results'].length;i++){
      console.log(jsondata['results'][i]['title']);
  arr.push({title:jsondata['results'][i]['title'],url:jsondata['results'][i]['url'],created_at:jsondata['results'][i]['created_at']})
    }
    var next = jsondata['next'];
    var previous = jsondata['previous'];
    console.log(next);
    
  res.render('news',{news:arr,nextpage:next,previouspage:previous});
})

app.post("/news2",(req,res)=>{
     
    let nextUrl = req.body.button;
    // let nextUrl2 = req.params;
    console.log(nextUrl);
    url = nextUrl;
    
    res.redirect("/news2");
    
})


var url2 = "https://newsapi.org/v2/everything?q=bitcoin&apiKey=168a5633e60e48caa97a7bd024717425";
app.get("/news",async (req,res)=>{
 const resp = await fetch(url2);
const jsondata = await resp.json();
const arr = [];
console.log(jsondata);
 
for(let i=0;i<20;i++){
  
  arr.push({author:jsondata['articles'][i]['author'],title:jsondata['articles'][i]['title'],url:jsondata['articles'][i]['url'],urlToImage:jsondata['articles'][i]['urlToImage'],content:jsondata['articles'][i]['content'],publishedAt:jsondata['articles'][i]['publishedAt'],})
  
}
res.render('news2',{news:arr});
});


app.get("/contactus",(req,res)=>{
    res.render("contactUs");
})

// for any types of news do this 


app.get('/news/:topic', (req, res) => {
//  whatever topic comes in I have to serve this 
})


app.get("/email",(req,res)=>{
  res.send("you have subsribed successfully ha ha")
})

app.post("/email",(req,res)=>{
  console.log(req.body);
  // console.log(req.params);
//  save this email in file and then in future in dataBase ha ha great TODO
  fs.appendFileSync('input.txt',req.body.email+"\n");
  res.redirect("/email");
})


app.listen(80, () => {
  console.log("server is listening on port 300 ");
});
