// getting started 
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/harryKart', { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
// db.once('open', function () {  // once connected then run this function
//     // we're connected!`
//     console.log("we are connected bro")
// });

const kittySchema = new mongoose.Schema({
    name: String
});





kittySchema.methods.speak = function () {
    const greeting = "my name is "+ this.name 
    console.log(greeting);
  }

  const Kitten = mongoose.model('Kitten', kittySchema);// it will make collection of plural name like kittens

  const harryKitty = new Kitten({ name: 'harryKitty' });


// console.log(harryKitty.name); // 'Silence'
//   harryKitty.speak();


  // abhi tak save nahi kiya he
  harryKitty.save(function (err, harryKitty) {
    if (err) return console.error(err);
    harryKitty.speak();
  });

//   kittens.find(function (err, kittens) {
//     if (err) return console.error(err);
//     console.log(kittens);
//   })