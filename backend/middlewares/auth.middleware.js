const userModel = require('../models/user.model')
const captainModel = require('../models/captiain.model')
const blacklistTokenModel = require("../models/blacklistToken.model")
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')


module.exports.authUser= async (req,res,next)=>{
    const token = req.cookies.token || req.headers.authorization?.split(' ')[1]
    if(!token){
        return res.status(401).json({error:"Unauthorized"})
    }
    const isBlacklisted = await blacklistTokenModel.findOne({token:token})
    if(isBlacklisted){
        return res.status(401).json({messsage:"Unauthorized"})
    }
  
    try {
        const decode = jwt.verify(token,process.env.JWT_SECRET)
        const user = await userModel.findById(decode._id)

        req.user = user
        return next()
    } catch (error) {
        return res.status(401).json({error:"Unauthorized"})
    }
}

module.exports.authCaptain= async (req,res,next)=>{
    const token = req.cookies.token || req.headers.authorization?.split(' ')[1]
    if(!token){
        return res.status(401).json({error:"Unauthorized"})
    }
    const isBlacklisted = await blacklistTokenModel.findOne({token:token})
    if(isBlacklisted){
        return res.status(401).json({messsage:"Unauthorized"})
    }

    try {
        const decode = jwt.verify(token,process.env.JWT_SECRET)
        const captain = await captainModel.findById(decode._id)
        req.captain = captain;

        return next()
    }
        catch(err){
            console.log(err);

        res.status(401).json({ message: 'Unauthorized' });
        }
    }