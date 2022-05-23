
// const readableStream = new Stream.Readable();

const Stream = require('stream');

// const readableStream = new Stream.Readable({
//   read() {},
// });
// const writableStream = new Stream.Writable();

// writableStream._write = (chunk, encoding, next) => {
//   console.log(chunk.toString());
//   next();
// };

// readableStream.pipe(writableStream);

// readableStream.push('hi!');
// readableStream.push('ho!');

// readableStream.on('close', () => writableStream.end());
// writableStream.on('close', () => console.log('ended'));

// readableStream.destroy();
// var ndjson = require('ndjson')
// const fs = require('fs')
// fs.createReadStream('data.txt')
//   .pipe(ndjson.parse())
//   .on('data', function(obj) {
//     // obj is a javascript object
//     console.log(obj);
    
//   })

const ndjson = require('ndjson')
const express = require('express')
const bodyParser = require('body-parser')
const through = require('through')
const app = express()
          app.use(bodyParser.urlencoded({extended:true}))
app.get('/',(req,res)=>{
          res.send("saiofa\n");
})
app.listen(80,()=>{
console.log('server is listening on port 3000 ');
})


  var hyperquest = require('hyperquest');
var a="";


hyperquest('https://newsapi.org/v2/everything?q=bitcoin&apiKey=168a5633e60e48caa97a7bd024717425').pipe(process.stdout);// it works but how to do more fuck off 



// hyperquest("https://newsapi.org/v2/everything?q=bitcoin&apiKey=168a5633e60e48caa97a7bd024717425")
//   .pipe(ndjson.parse())
//   .pipe(through.obj(write))
//   .pipe(process.stdout)
// function write (row, enc, next) {
//   next(null, String(row.value * row.value) + '\n')
// }