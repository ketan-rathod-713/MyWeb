// inserting data in mongo db
use harryKart 
db.items.insertOne({name:"samsung 30s", price:22000, rating:4.5 ,qty:233,sold:20})
db.items.insertMany([{name:"samsung 30s", price:22000, rating:4.5 ,qty:233,sold:20},{name:"motorola 30s", price:12000, rating:4.5 ,qty:233,sold:20}])

