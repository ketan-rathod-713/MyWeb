const express = require("express");
const path = require("path");
const fs = require("fs");
const app = express();
const port = 80;

// EXPRESS SPECIFIC STUFF
app.use('/static', express.static('static')) // For serving static files

app.use(express.urlencoded()); //form ka data express tak lane tak for backend 

// PUG SPECIFIC STUFF
app.set('view engine', 'pug') // Set the template engine as pug
app.set('views', path.join(__dirname, 'views')) // Set the views directory
 
// ENDPOINTS
app.get('/', (req, res)=>{
    const con = "This is the best content on the internet so far so use it wisely"
    const params = {'title': 'PubG is the best game', "content": con}
    res.status(200).render('index.pug', params);
})

//when someone comes to me with post req
app.post('/', (req, res)=>{
    console.log(req.body);
    Name = req.body.name;
    address = req.body.address;
    age = req.body.age;
    gender = req.body.gender;
    let outputToWrite =`the name of the client is ${Name} , ${age} years old , ${gender} residing at ${address}`
    fs.writeFileSync('output.txt',outputToWrite)
    
    const params = {'message':"your form has been submitted successfully " }
    res.status(200).render('index.pug', params);
})


// START THE SERVER
app.listen(port, ()=>{
    console.log(`The application started successfully on port ${port}`);
});
