const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const http = require("http");
const fetch = require('node-fetch');
const https = require("https");
const app = express();
const axios = require("axios");



app.use(bodyParser.urlencoded({ extended: true }));
app.set("view engine", "ejs");
// app.use(express.static("public"));

app.get("/", (req, res) => {
  let arr = [{name:"bitcciga",symbol:"BTC",value:2481236}];
  const url ="https://min-api.cryptocompare.com/data/pricemulti?fsyms=BTC,ETH,BUSD,SQL,BNB,XRP,TRX,SOL,ATOM,USDC,ADA,DOT,KNC,FTM,MATIC,LTC,SHIB,NEAR,SAND,XMP&tsyms=USD&api_key=c0686da4f1c5e7913524ca03adbd259e6e3392de2745292768dddbdefe556963";

  https.get(url, function (response) {
    response.on("data",async function (data) {
      var arr2 = [];
      const mydata =await JSON.parse(data);
      console.log(mydata.BTC);
      const keys = Object.keys(mydata);// print all keys console.log(keys);

      keys.forEach((key, index) => {   // iterate over object
        console.log(`${key}: ${mydata[key].USD}`);
        arr.push({name:"waht",symbol:key,value:`${mydata[key].USD}`});
      });
    });
  });

  setTimeout(function() {            // this time i solve a little but getting results ha ha :)
    console.log("first function executed");
    res.render("home", { part2: arr });
  }, 3000);
 
});

app.get("/marketCap", (req, res) => {
    let arr = [{name:"bitcciga",symbol:"BTC",value:2481236}];
    const url ="https://min-api.cryptocompare.com/data/pricemulti?fsyms=BTC,ETH,BUSD,SQL,BNB,XRP,TRX,SOL,ATOM,USDC,ADA,DOT,KNC,FTM,MATIC,LTC,SHIB,NEAR,SAND,XMP&tsyms=USD&api_key=c0686da4f1c5e7913524ca03adbd259e6e3392de2745292768dddbdefe556963";
  
    https.get(url, function (response) {
      response.on("data",async function (data) {
        var arr2 = [];
        const mydata =await JSON.parse(data);
        console.log(mydata.BTC);
        const keys = Object.keys(mydata);// print all keys console.log(keys);
  
        keys.forEach((key, index) => {   // iterate over object
          console.log(`${key}: ${mydata[key].USD}`);
          arr.push({name:"waht",symbol:key,value:`${mydata[key].USD}`});
        });
      });
    });
    
  setTimeout(function() {            // this time i solve a little but getting results ha ha :)
      console.log("first function executed");
      res.render("marketCap", { coins: arr });
    }, 2000);
});

app.get("/youtubeCourses", (req, res) => {
  res.render("youtubeCourses");
});
app.get("/glossary", (req, res) => {
  res.render("glossary");
});
app.get("/contactus",(req,res)=>{
  res.render("contactUs");
})
// FEATURE
app.get("/email",(req,res)=>{  // FROM FOOTER EMAIL
  res.send("you have subsribed successfully ha ha")
})
app.post("/email",(req,res)=>{
  console.log(req.body);
  fs.appendFileSync('input.txt',req.body.email+"\n");//  save this email in file and then in future in dataBase ha ha great TODO
  res.redirect("/email");
})

var url ="https://cryptopanic.com/api/v1/posts/?auth_token=945d1e2144e8c43d82bdc2f5cdd819e0c0aaf41c&public=true&page=1"; // NEEDS TO BE GLOBAL
app.get("/news2",async (req,res)=>{
  const resp = await fetch(url);
  const jsondata = await resp.json();  // console.log(jsondata); 
  const arr = [];   
    for(let i=0;i<jsondata['results'].length;i++){   // console.log(jsondata['results'][i]['title']);
      arr.push({title:jsondata['results'][i]['title'],url:jsondata['results'][i]['url'],created_at:jsondata['results'][i]['created_at']}); 
    }
    var next = jsondata['next'];
    var previous = jsondata['previous'];
  res.render('news',{news:arr,nextpage:next,previouspage:previous});
})

app.post("/news2",(req,res)=>{
    let nextUrl = req.body.button; // let nextUrl2 = req.params;
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

app.get('/news/:topic', (req, res) => {
//  whatever topic comes in I have to serve this LIKE BITCOIN , ETHERIUM ETC.

})


// FEATURE 
app.get("/compose",(req,res)=>{
  res.render("compose");           // make a good compose such that I can make a good posts ha ha
})
var i = 3; // FOR SERIAL NO
app.post("/compose",(req,res)=>{
   console.log(req.body);
   postArr.push({serialno:i++,title:req.body.title,description:req.body.description,webcode:req.body.webcode});
   res.redirect("/posts");
})

let postArr = [{serialno:1,title:"The new startUp Policy",description:"In this there will be a huge description ha hah aha",webcode:"<h1>Hello This will be my web <i>page</i></h2>"},
{serialno:2,title:"This is the second web page ha ha",description:"In this there will be a huge description ha hah aha",webcode:"<h1>Hello This will be my second web page ha ha i am fool isnt it  <i>page</i></h2>"}
];  // use MONGODB

app.get("/posts/:p",(req,res)=>{
  var required;
  postArr.forEach((element)=>{
     if(element.serialno==req.params.p){
        required = element.webcode;
        // console.log(element.webcode);
          res.render("post",{webcode:required});
        
     }
  })
  
})

app.get("/posts",(req,res)=>{
  res.render("posts",{posts:postArr});
})

// For good data visulizations 
// https://observablehq.com/@observablehq/observable-overview-video?collection=@observablehq/observable-demos

//  Now I want to add file and then let me show it ha ha
const multer = require("multer") // It is the middle ware that is used to implement the file related stuiff upload and all that 
// Multer adds a body object and a file or files object to the request object. The body object contains the values of the text fields of the form, the file or files object contains the files uploaded via the form.

// read the documentation of multer i think it is good may be \


// TODO  RIGHT NOW I MESSED UP BUT TRY IN DIFFERENT PROJECT AND LEARN THAT FILE SYSTEM HA HA

app.listen(80, () => {
  console.log("server is listening on port 300 ");
});
