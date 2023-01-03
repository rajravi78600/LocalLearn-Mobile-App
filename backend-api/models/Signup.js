const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Signup = new Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },

  otp: {
    type: String,
  },
  verified: {
    type: Boolean,
  },
  created_at: {
    type: Date,
    default: Date.now(),
  },
  updated_at: {
    type: Date,
  },
});

module.exports = User = mongoose.model("Signup", Signup);