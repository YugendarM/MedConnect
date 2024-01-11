const mongoose = require("mongoose");

const DoctorSchema = new mongoose.Schema({
    name:{
        type:String,
        required: true,
    },
    age:{
        type:Number,
        required:true
    },
    gender:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    phoneNo:{
        type:String,
        required:true,
        unique:true
    },
    image:{
        type:String,
    },
    qualification:[{
        type:String,
        required:true
    }],
    hospital:{
        type:String,
    },
    specialization:[
        {
            type:String,
        }
    ],
    experience:{
        type:Number,
        required:true
    },
    location:{
        lat:String,
        lon:String
    }
});

const Doctor = mongoose.model("Doctor",DoctorSchema);
module.exports = Doctor;