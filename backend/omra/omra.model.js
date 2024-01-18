const mongoose = require("mongoose");

const OmraSchema = new mongoose.Schema({
  title: String,
  description: String,
  price: Number,
  image: String,
});

const Omra = mongoose.model("Omra", OmraSchema);

module.exports = Omra;
