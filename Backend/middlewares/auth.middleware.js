const jwt = require('jsonwebtoken');
const UserModel = require('../models/user.model');
const BlacklistToken = require('../models/blacklistToken.model');
const captainModel = require('../models/captain.model');

module.exports.authUser = async (req, res, next) => {
    console.log('Cookies:', req.cookies);
    console.log('Auth Header:', req.headers.authorization);
    
    const token = (req.cookies ? req.cookies.token : undefined) || 
                 (req.headers.authorization ? req.headers.authorization.split(' ')[1] : undefined);
    
    console.log('Token extracted:', token);

    if (!token) {
        return res.status(401).json({ message: "Unauthorized" });
    }

    const isBlacklisted = await BlacklistToken.findOne({ token });
    if (isBlacklisted) {
        return res.status(401).json({ message: "Unathorised" });
    }
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        console.log('Decoded token:', decoded);
        
        const user = await UserModel.findById(decoded._id); // ✅ FIXED
        console.log('User found:', user);

        if (!user) {
            return res.status(401).json({ message: "User not found" });
        }

        req.user = user;
        next();
    } catch (error) {
        console.error('Auth error:', error);
        return res.status(401).json({ message: "Unauthorized" });
    }
}
module.exports.authCaptain = async (req, res, next) => {
    const token = req.cookies.token || req.headers.authorization.split(' ')[1];
    if (!token) {
        return res.status(401).json({ message: "Unauthorized" });
    }

    const isBlacklisted = await BlacklistToken.findOne({ token });
    if (isBlacklisted) {
        return res.status(401).json({ message: "Unathorised" });
    }
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const captain = await captainModel.findById(decoded._id);
        req.captain = captain;
        return next();
    }catch (error) {
        res.status(401).json({ message: "Unauthorized" });
    }

}