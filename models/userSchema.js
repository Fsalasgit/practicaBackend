//indica como se guardan los datos en nuestra base

const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    nombre:{
        type:String,
        require:true,
        trim:true
    },
    userName:{
        type:String,
        require:true,
        trim:true
    },
    password:{
        type: String,
        require:true,
        trim:true
    },
    rol:{
        type: String,
        default: "user",
        enum: ["user", "admin"]
    }
});

const User = mongoose.model("User", userSchema);
module.exports = User;
