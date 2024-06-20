const mongoose = require("mongoose");

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
    password : {
        type : String,
        required : true,
    },
    profileImage : {
        type : Image,
        default : "D:\Blog-Web-Application\public\images\avatar.png"
    }
}, {timestamps: true});

const userModel = mongoose.model("user", userSchema);

module.exports = {userModel};