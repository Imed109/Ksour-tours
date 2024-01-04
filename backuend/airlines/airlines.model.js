const mongoose = require("mongoose");

const AirlineSchema = new mongoose.Schema({
  name: String,
  image: String,
  // Other properties as needed
});

const Airline = mongoose.model("Airline", AirlineSchema);

module.exports = Airline;
