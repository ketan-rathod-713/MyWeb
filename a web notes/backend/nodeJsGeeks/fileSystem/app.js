const fs = require('fs');
const { buffer } = require('stream/consumers');
// To create, read and delete files
var buf = new Buffer(1024);   // for getting new buffer 
// Asynchronous read
// fs.readFile('input2.java', function (err, data) { // we can read any type of file here ha ha
//     if (err) {
//        return console.error(err);
//     }
//     console.log("Asynchronous read: " + data.toString());
//  });


 console.log("opening file!");
 fs.open('input.txt', 'r+', function(err, fd) {
    if (err) {
       return console.error(err);
    }
    console.log("File open successfully");     
    
    fs.read(fd,buf,0,buf.length,0,function(err,bytes){
        console.log("bytes read "+ bytes);

        
          // Print only read bytes to avoid junk.
      if(bytes > 0){
        console.log(buf.slice(0, bytes).toString());
      }
    //   let me log full buffer
    console.log(buf.toString());
    
    })


 });

fs.readdirSync(__dirname).forEach(data=>{
    console.log(data);  
})



//  for file descripter
// https://nodejs.dev/learn/working-with-file-descriptors-in-nodejs


//  Open a File: The fs.open() method is used to create, read, or write a file. The fs.readFile() method is only for reading the file and fs.writeFile() method is only for writing to the file, whereas fs.open() method does several operations on a file. First, we need to load the fs class which is a module to access the physical file system.