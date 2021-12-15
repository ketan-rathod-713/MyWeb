// Node.js program to demonstrate
// the fs.readFile() method

// Include fs module
var fs = require('fs');

// Use fs.readFile() method to read the file
fs.readFile('rohan.txt', 'utf8', function(err, data){ // jab bhi read karo tab ye call back function chala dena that is what asynchronuos function callled , use arrow function 
    // jab khana pura khale tab mithai (call-backs) de dena 
    // (err,data)=>{ console.log(data)}
	// node js works on non blocking IO model ==>based on call-backs
	// Display the file content
	console.log(data);
});

console.log('readFile called');  // ye messsage pehle run ho raha he why --> 

// line by line executioon not guaranteed