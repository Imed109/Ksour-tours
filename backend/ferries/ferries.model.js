const mongoose = require("mongoose");

const FerrySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true
  },
  image: String,
  description: String,
});

const Ferry = mongoose.model("Ferry", FerrySchema);

module.exports = Ferry;
