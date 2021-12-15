const http = require('http');
const fs = require('fs');
const { exit } = require('process');
const fileContent = fs.readFileSync('fshtml.html');

const server = http.createServer((req,res)=>{
    res.writeHead(200,{'content-type':'text/html'});
    res.end(fileContent);
})

server.listen(80,'127.0.0.1',()=>{
    console.log("listening on port 80");
})

// if we mention port 80 here then no need to write port name explicitly on browser