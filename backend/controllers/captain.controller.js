const blacklistTokenModel = require("../models/blacklistToken.model");
const captianModel = require("../models/captiain.model");
const captainService = require("../services/captain.service");
const { validationResult } = require("express-validator");


module.exports.registerCaptain = async (req, res, next) => {
  const error = validationResult(req);
  if (!error.isEmpty()) {
    return res.status(400).json({ error: error.array() });
  }
  const { fullname, email, password, vehicle } = req.body;

  const isCaptian = await captianModel.findOne({ email });
  if (isCaptian) {
    return res.status(400).json({
      message: "Captain already exists",
    });
  }

  const hashPassword = await captianModel.hashPassword(password);
  const captain = await captainService.createCaptain({
    firstname: fullname.firstname,
    lastname: fullname.lastname,
    email,
    password: hashPassword,
    color: vehicle.color,

    numPlate: vehicle.numPlate,
    capacity: vehicle.capacity,
    vehicleType: vehicle.vehicleType,
  });

  const token = captain.generateAuthToken();
  res.status(201).json({
    message: "Captain created successfully",
    token,
    captain,
  });
};

module.exports.loginCaptain = async (req, res, next) => {
  const error = validationResult(req);
  if (!error.isEmpty()) {
    return res.status(400).json({ error: error.array() });
  }
  const { email, password } = req.body;
  const captain = await captianModel.findOne({ email }).select("+password");
  if (!captain) {
    return res.status(400).json({
      message: "Invalid email or password",
    });
  }
  const isMatch = await captain.comparePassword(password);
  if (!isMatch) {
    return res.status(400).json({ message: "Invalid email or password" });
  }

  const token = await captain.generateAuthToken();
  res.cookie("token", token);
  res.status(200).json({
    message: "Login successful",
    token,
    captain,
  });
};

module.exports.getCaptainProfile = async (req, res, next) => {
  res.status(200).json({
    message: "Captain profile",
    captain: req.captain,
  });
};

module.exports.logoutCaptain = async (req, res, next) => {
  const token = req.cookies.token || req.headers.authorization?.split(" ")[1];
  const isBlacklisted = await blacklistTokenModel.findOne({ token: token });

  res.clearCookie("token");
  res.status(200).json({
    message: "Logout successful",
  });
}
