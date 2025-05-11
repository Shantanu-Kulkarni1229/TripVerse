const UserModel = require('../models/user.model');
const userService = require('../services/user.service');
const {validationResult} = require('express-validator');

module.exports.registerUser = async (req,res,next)=>{
    const errors = validationResult(req);
    if(!errors.isEmpty()) {
        return res.status(400).json({errors: errors.array()});
    }

    try {
        const {fullname, email, password} = req.body;
        const hashPassword = await UserModel.hashPassword(password);
        const user = await userService.createUser({
            firstname: fullname.firstname,
            lastname: fullname.lastname,
            email,
            password: hashPassword,
        });
        const token = user.generateAuthToken();

        res.status(201).json({token, user});
    } catch (error) {
        console.error('Registration error:', error);
        res.status(500).json({error: error.message});
    }
}

module.exports.loginUser = async (req,res,next)=>{
    const errors = validationResult(req);
    if(!errors.isEmpty()) {
        return res.status(400).json({errors: errors.array()});
    }

    const {email, password} = req.body;
    const user = await UserModel.findOne({email}).select('+password');
    if(!user) {
        return res.status(401).json({error: 'Invalid credentials'});
    }

    const isMatch = await user.comparePassword(password);
    if(!isMatch) {
        return res.status(401).json({error: 'Invalid credentials'});
    }

    const token = user.generateAuthToken(); 
    res.status(200).json({token, user});
}