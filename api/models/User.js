const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name:{
        type:String,
        required: true
    },
    email:{
        type: String,
        required: true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    phoneNo:{
        type:String,
    },
    verified:{
        type:Boolean,
        default:false
    },
    verificationToken:String,
    address:{
        doorNo:String,
        street:String,
        landmark:String,
        city:String,
        postalCode:String
    },
    requests:[
        {
            type: mongoose.Types.ObjectId,
            ref: "Request",
        }
    ],
    resources:[
        {
            name:String,
            unit:Number,
            otherDetails:String
        }
    ],
    location:{
        lat:String,
        lon:String
    },
    createdAt:{
        type:Date,
        default:Date.now
    }
})

const User = mongoose.model("User",UserSchema);

module.exports= User