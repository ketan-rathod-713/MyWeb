const { urlencoded } = require('body-parser');
const express = require('express');
const pug = require('pug');
const app = express();
const port = 80;


app.set('view engine','pug');
app.set('views','view');

app.use(express.urlencoded()); //form ka data express tak lane tak for backend 

app.get('/', function (req, res) {
    console.log("this is req.")
    res.render('index.pug')
  })

app.post('/',(req,res)=>{
    console.log(req.body)
    let name = req.body.name;
    // res.send(`the name is ${name}`)
    res.render('index.pug')
})  

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
  })



