const express = require("express");
const path = require("path");
const app = express();
const port = 80;
var bodyParser = require('body-parser')
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/contactDance', {useNewUrlParser: true, useUnifiedTopology: true});


//define mongoose scchema

const contactSchema = new mongoose.Schema({
    name: String,
    phone: String,
    email: String,
    address: String,
    desc: String,
  });

  const Contact = mongoose.model('Contact', contactSchema);

app.use('/static', express.static('static')) // For serving static files
app.use(express.urlencoded())

// PUG SPECIFIC STUFF
app.set('view engine', 'pug') // Set the template engine as pug
app.set('views', path.join(__dirname, 'views')) // Set the views directory

// ENDPOINTS
app.get('/', (req, res)=>{
    const con = "This is the best content on the internet so far so use it wisely"
    const params = { }
    res.status(200).render('home.pug', params);

})

app.get('/contact',(req,res)=>{
    const param ={ }
    res.status(200).render('contact.pug',param)
})

app.post('/contact',(req,res)=>{
    console.log(req.body)// for just printing 

    var myData = new Contact(req.body); // req.body se jo content aa raha he usse take info. and put it in myData
    myData.save().then(()=>{          // lekin ye save karbe ke sath sath promise return karega
    //    res.send("This item has been saved to the database")
    //    res.render('contact.pug')
    res.render('home.pug')
    }).catch(()=>{
        res.status(400).send("item was not saved to the database")
    })
})


// START THE SERVER
app.listen(port, ()=>{
    console.log(`The application started successfully on port ${port}`);
});