const mongoose = require("mongoose");

const HotelsSchema = new mongoose.Schema({
  name: String,
  image: String,
  description: String,
});

const Hotels = mongoose.model("Hotels", HotelsSchema);

module.exports = Hotels;