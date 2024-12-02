const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const userSchema = new mongoose.Schema({
  fullname: {
    firstname: {
      type: String,
      required: true,
      minlength: [3, "Firstname should be 3 character long"],
    },
    lastname: {
      type: String,
      minlength: [3, "lasttname should be 3 character long"],
    },
  },
  email: {
    type: String,
    required: true,
    minlength: [10, "Invalid Email "],
  },
  password: {
    type: String,
    required: true,
    select: false,
    minlength: [5, "Email should be 5 character long"],
  },
  socketId: {
    type: String,
  },
});

userSchema.methods.generateAuthToken = function() {
  const token = jwt.sign({ _id: this._id }, process.env.JWT_SECRET, {
    expiresIn: "24h",
  });
  return token;
};

userSchema.methods.comparePassword = async function (password) {
  return await bcrypt.compare(password, this.password);
}
userSchema.statics.hashPassword = async (password) => {
  return await bcrypt.hash(password, 10);
};

const userModel = mongoose.model("user", userSchema);

module.exports = userModel;
