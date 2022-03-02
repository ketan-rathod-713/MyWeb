const mongoose = require('mongoose');
const { FindCursor } = require('mongoose/node_modules/mongodb');
mongoose.connect("mongodb://localhost:27017/fruitsDB")
// until now the code is runned 

//create a new schema , structure 

const fruitsSchema = new mongoose.Schema({
    name: String,
    rating:Number,
    review:String
});

// and then make model 

const Fruit = mongoose.model("Fruit",fruitsSchema); // it will make a new collection of name fruits and then it will add data according to the fruitschema 
// what if i dont metion schema ?

const fruit = new Fruit({ 
    name:"apple",
    rating: 7,
    review:"pretty solid as a fruit"
});  // it will make a document out of the model of Fruit and then 4
// fruit.save(); 
// it will be saved to the database by this method
// it will save the same thing all the time 
// check values in terminal by mongo and going to fruits collection in fruitDB database 


const orange = new Fruit({
    name:"Orange",
    rating:10,
    review:"this is orange"
})
const kiwi = new Fruit({
    name:"kiwi",
    rating:10,
    review:"this is orange"
})

// now to save all 
// 
// Fruit.insertMany([orange,kiwi],function(err){
//     if(err)
//     console.log(err);
//     else
//     console.log('success');
    
    
// })

Fruit.find(function(err,fruits) {
    if(err)
    console.log(err);
    else{
        // console.log(fruits); // to print all the stuff
        mongoose.connection.close(); // to close the conection once work is over is a good practice
        fruits.forEach(function(element){
            console.log(element.name);
            
        })
        
    }
    
}) // from this we will get the array of objects(documents here)