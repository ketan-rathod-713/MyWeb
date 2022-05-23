const express = require('express')
const app = express();
const assert = require('assert');
  
let x = 4;
let y = 5;
  
try {
  
    // Checking condition
    assert(x == y);         // if condition not equal then throw error ha ha
}
catch {
  
    // Error output
    console.log(
        `${x} is not equal to ${y}`);
}

// assert(x == y);    // THis will give an error

app.get("/",(req,res)=>{
    res.send("fuasuidgha")
})

app.listen(80,()=>{
    console.log('port started on 80'); 
})


// lets install assert 