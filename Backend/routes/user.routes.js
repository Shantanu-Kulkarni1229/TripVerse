const express = require('express');
const router = express.Router();
const {body} = require('express-validator');
const authUser = require('../middlewares/auth.middleware');
const UserController = require('../controllers/user.controller');
router.post('/register',[
    body('email').isEmail().withMessage('Invalid email'),
    body('fullname.firstname').isLength({min: 3}).withMessage('Firstname must be at least 3 characters'),
    body('password').isLength({min: 6}).withMessage('Password must be at least 6 characters')
]
,UserController.registerUser);


router.post('/login',[
    body('email').isEmail().withMessage('Invalid email'),
    body('password').isLength({min: 6}).withMessage('Password must be at least 6 characters')
], UserController.loginUser);


router.get('/profile', authUser.authUser, UserController.getUserProfile);
module.exports = router;

router.get('/logout', authUser.authUser, UserController.logoutUser);