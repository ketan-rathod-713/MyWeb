// just to see if it works or not 
// so i can try out anything that i want 
// This is a example of peoples shema and then modela and then save some data in that document 
const mongoose = require('mongoose')
mongoose.connect("mongodb://localhost:27017/peopledb")

const peopleSchema = new mongoose.Schema({
    name: String,
    age: Number
});

const PeopleModel = mongoose.model("People",peopleSchema);

const people = new PeopleModel({
    name: "Ketan",
    age:19
});
people.save();

// then to confirm go to mongoshell 
// and then show dbs 
// annd then use peopledb
// and then show collections 
// and then collections.find()