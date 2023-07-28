const mongoose = require("mongoose")

//open a connection to the store database on our locally running instance of MongoDB
const mongoUri = "mongodb://127.0.0.1/store"
mongoose.connect(mongoUri).then(() => {
    console.log("db connected");
  }).catch(err => console.log(err))


   //Define the items Schema
const itemSchema = new mongoose.Schema({
    name: String,
    description: String,
    quantity: Number,
    price: Number
  });

//Define a Model for the items schema
const Item = mongoose.model("Item", itemSchema);

//Export the Model so that it can be used inside other files  
module.exports = Item;