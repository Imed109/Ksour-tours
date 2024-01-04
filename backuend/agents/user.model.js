const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const SECRET_KEY = process.env.SECRET_KEY;


const UserSchema = new mongoose.Schema({
  fullName: String,
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: String,
  phone: Number,
});



// Hash password before saving
UserSchema.pre("save", async function (next) {
  const user = this;
  if (user.isModified("password") || user.isNew) {
    try {
      const hashedPassword = await bcrypt.hash(user.password, 10);
      user.password = hashedPassword;
      next();
    } catch (error) {
      return next(error);
    }
  } else {
    return next();
  }
});

// Method to compare passwords
UserSchema.methods.comparePassword = async function (password) {
  return await bcrypt.compare(password, this.password);
};

// Method to generate JWT token
UserSchema.methods.generateToken = function () {
  return jwt.sign(
    { _id: this._id },
     SECRET_KEY, 
     {
    expiresIn: "24h" // Token expiration time
  });
};

const User = mongoose.model("User", UserSchema);
module.exports = User;
