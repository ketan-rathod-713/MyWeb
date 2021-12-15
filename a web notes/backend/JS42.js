//built in modules kisi aur ne likhi he
// const fs =require("fs");
// const text = fs.readFileSync("dele.txt","utf-8");
// console.log("the content of the file is ")
// console.log(text);

// i dont know why this is not working on this 

// similarly we can write by using writeFilesync

// there are lots of modules and no need to ratta all

// also we can make our modules or also we can use third party modules other than built in 


//RE LEARNING TO UNDERSTAND

// first step is to include module
const fs = require("fs");
let text = fs.readFileSync("dele.txt", "utf-8"); 
// ohhh my mistake was that the file should be inside my coding stuff folder not in html folder 
text = text.replace("browser","Rohan");
console.log("The content of the file is ");
console.log(text);

console.log("Creating a new file...")
fs.writeFileSync("rohan.txt",text);
console.log("the file has written successfully");
console.log(fs.readFileSync("rohan.txt","utf-8"));

// i don't know why i am enable to use writefilesync