const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const captainSchema = new mongoose.Schema({
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
    unique: true,
    lowercase: true,
    match: [/^\S+@\S+\.\S+$/, "Please fill a valid email address"],
  },
  password: {
    type: String,
    required: true,
    select: false,
  },
  socketId: {
    type: String,
  },
  status: {
    type: String,
    enum: ["active", "inactive"],
    default: "active",
  },
  vehicle: {
    color: {
      type: String,
      required: true,
      minlength: [3, "color should be 3 character long"],
    },
    numPlate: {
      type: String,
      required: true,
      minlength: [3, "numplate should be 3 character long"],
    },
    capacity: {
      type: Number,
      required: true,
      minlength: [1, "capacity must be 1 or more"],
    },
    vehicleType: {
      type: String,
      required: true,
      enum: ["bike", "car", "auto"],
    },
  },
  location:{
    lat: {
      type: Number,
    },
    lng: {
        type: Number,
      }
  }
});

captainSchema.methods.generateAuthToken = function() {
    const token = jwt.sign({ _id: this._id }, process.env.JWT_SECRET, {
      expiresIn: "24h",
    });
    return token;
  };
  
  captainSchema.methods.comparePassword = async function (password) {
    return await bcrypt.compare(password, this.password);
  }
  captainSchema.statics.hashPassword = async (password) => {
    return await bcrypt.hash(password, 10);
  };
  
  const captainModel = mongoose.model("captain", captainSchema);
  
  module.exports = captainModel;
  
