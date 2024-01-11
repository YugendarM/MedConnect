const mongoose = require("mongoose");
const HospitalSchema =new mongoose.Schema({
    name:{
        type:String,
        required:true
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
    treatments:[
        {
            type:String
        }
    ],
    address:{
        type:String,
        required:true
    },
    type:{
        type:String,
    },
    city:{
        type:String,
        required:true
    },
    facilities:[
        {
            type:String
        }
    ],
    rating:{
        type:Number
    },
    certifications:[
        {
            type:String
        }
    ],
    doctors:{
        type:Number,
        required:true,
    },
    beds:{
        type:Number
    },
    visitingHours:{
        // type:TimeRanges
        type:String
    },
    location:{
        lat:String,
        lon:String
    },
    website:{
        type:String
    }
});

const Hospital = mongoose.model("Hospital",HospitalSchema);
module.exports = Hospital;