const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const SECRET_KEY = process.env.SECRET_KEY;

const AdminSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

// Hash password before saving
AdminSchema.pre("save", async function (next) {
  const admin = this;
  if (admin.isModified("password") || admin.isNew) {
    try {
      const hashedPassword = await bcrypt.hash(admin.password, 10);
      admin.password = hashedPassword;
      next();
    } catch (error) {
      return next(error);
    }
  } else {
    return next();
  }
});

// Method to compare passwords
AdminSchema.methods.comparePassword = async function (password) {
  return await bcrypt.compare(password, this.password);
};

// Method to generate JWT token
AdminSchema.methods.generateToken = function () {
  return jwt.sign(
    { _id: this._id },
    SECRET_KEY,
    {
      expiresIn: "24h" // Token expiration time
    }
  );
};

const Admin = mongoose.model("Admin", AdminSchema);
module.exports = Admin;
