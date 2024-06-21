const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const userSchema = new mongoose.Schema({
    username : {
        type : String,
        required : true,
        unique : true,
    },
    fullName : {
        type : String,
        required : true,
    },
    email : {
        type : String,
        required : true,
        unique : true,
    },
    salt : {
        type : String,
        required : true,
    },
    password : {
        type : String,
        required : true,
    },
    profileImage : {
        type : Image,
        default : "D:\Blog-Web-Application\public\images\avatar.png"
    }
}, {timestamps: true});

userSchema.pre("save", async function(next) {

    const user = this;

    if(!user.isModified("password")) {
        return next();
    }

    const salt = await bcrypt.genSalt(10);
    const password = await bcrypt.hash(this.password, salt);

    this.salt = salt;
    this.password = password;

    next();
})

const userModel = mongoose.model("user", userSchema);

module.exports = {userModel};