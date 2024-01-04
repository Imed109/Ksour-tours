const mongoose = require("mongoose");

const FormulaireSchema = new mongoose.Schema({
    fullName: String,
    email: {
      type: String,
      required: true,
    },
    age: Number ,
    phone:{ 
        type :Number,
        required: true, 
    },
   inquiryType: String,
   isDone: {
    type:Boolean,
    default:false,
  },
   request : String
  });
  
  const Formulaire = mongoose.model("Formulaire", FormulaireSchema);
module.exports = Formulaire;