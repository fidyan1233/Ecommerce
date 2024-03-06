const bcrypt = require("bcryptjs");
const mongoose = require("mongoose");
const validator = require("validator");
const jwt = require("jsonwebtoken");




const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please Enter Your Name "],
        maxLenght: [30, "Name cannot exceed 30 characters"],
        minLenght: [4, "Name must have more than 4 charaters"],
    },
    email: {
        type: String,
        required: [true, "Please Enter Your Email"],
        unique: true,
        validate: [validator.isEmail, "Invalid Email Address"],
    },
    password: {
        type: String,
        required: [true, "Please Enter Your Password"],
        minLenght: [8, "Password should be greater that 8 characters"],
        select: false,

    },
    avatar: {
        public_id: {
            type: String,
            required: true,

        },
        url: {
            type: String,
            required: true,
        }
    },
    role:{
        type:String,
        default:"user",
    },
    resetPasswordToken:String,
    resetPasswordExpire:Date,


});




userSchema.pre("save",async function(next){
    if(!this.isModified("password")){
        next();
    }
    this.password = await bcrypt.hash(this.password,10);
});
// JWT Token 
userSchema.methods.getJWTToken = function (){
    return jwt.sign({id:this._id},process.env.JWT_SECRET,{
        expiresIn:process.env.JWT_EXPIRE,
    });
};

// compare password 

userSchema.methods.comparePassword = async function(enteredPassword){
    return await bcrypt.compare(enteredPassword,this.password) ;
}


module.exports = mongoose.model("User", userSchema);