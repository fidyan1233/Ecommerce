const ErrorHandler = require("../utils/errorhandler");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const User = require("../models/userModel");
const sendToken = require("../utils/jwtToken");

// user register 
exports.registerUser = catchAsyncErrors(async (req, res, next) => {
    const { name, email, password } = req.body;
    const user = await User.create({
        name,
        email,
        password,
        avatar: {
            public_id: "this is a sample id",
            url: "profileUrl"
        },
    });
    sendToken(user, 201, res);
});



// User Login 
exports.loginUser = catchAsyncErrors(async (req, res, next) => {
    const { email, password } = req.body;

    //check email and password both 

    if (!email || !password) {
        return next(new ErrorHandler("Please Enter Email & Password", 400));
    }


    const user = await User.findOne({ email }).select("+ password");

    if (!user) {
        return next(new ErrorHandler("Invalid Email or Password", 401));
    }


    const isPasswordMatched = await user.comparePassword(password);

    if (!isPasswordMatched) {
        return next(new ErrorHandler("Invalid Email or Password", 401));
    }


    sendToken(user, 200, res);
});