const captianModel = require("../models/captiain.model");
const captainService = require("../services/captain.service");
const { validationResult } = require("express-validator");

module.exports.registerCaptain = async (req, res,next) => {
    const error = validationResult(req);
    if(!error.isEmpty()){
        return res.status(400).json({error: error.array()})
    }
    const {fullname,email,password,vehicle} = req.body;

    const isCaptian = await captianModel.findOne({email});
    if(isCaptian){
        return res.status(400).json({
            message:"Captain already exists"
        })
    } 

    const hashPassword = await captianModel.hashPassword(password);
    const captain = await captainService.createCaptain({
        firstname:fullname.firstname,
        lastname:fullname.lastname,
        email,
        password: hashPassword,
        color:vehicle.color,
       
        numPlate:vehicle.numPlate,
        capacity:vehicle.capacity,
        vehicleType:vehicle.vehicleType,
    })

    const token = captain.generateAuthToken();
    res.status(201).json({
        message:"Captain created successfully",
        token,
        captain
    })
}
