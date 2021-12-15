const http = require('http');
const fs = require('fs');
const hostname = '127.0.0.1';
const port = 3000;

const home = fs.readFileSync('./index.html');  //  to read that file and store it in variable home
const about = fs.readFileSync('./aboutUs.html');
const services = fs.readFileSync('./services.html');
const contact = fs.readFileSync('./contactUs.html');

// this is very imp. concept i think so revise it often
// i am learning how to serve websites , before that we should know how to make websites 
// now its running ==> before that cd html then cd JS45 and then run node js45.js
const server = http.createServer((req, res) => {
console.log(req.url); // get req. to be printed 
url = req.url;

  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  // res.end(home);

if(url=='/'){
    res.end(home);
} else 
if (url=='/aboutUs.html') {
    res.end(about);
} else 
if(url=='/services.html'){
    res.end(services);
} else 
if(url=='/contactUs.html'){
    res.end(contact);
} else {
  res.end("<h1>404 Not FOund</h1>");
}

});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});