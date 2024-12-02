const captianModel = require("../models/captiain.model");

module.exports.createCaptain = async ({ firstname, lastname, email, password, color, numPlate, capacity, vehicleType,
}) => {
  if (!firstname || !email || !password || !color || !numPlate  || !capacity || !vehicleType) {
    throw new Error("All fields are required");
  }
  const captain = await captianModel.create({
    fullname:{ 
        firstname,
        lastname
    },
    email,
    password,
    vehicle: {
      color,
      numPlate,
      capacity,
      vehicleType,
    }
  });
  return captain;
};