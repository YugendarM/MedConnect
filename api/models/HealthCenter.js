const mongoose = require("mongoose");
const HealthCenterSchema = new mongoose.Schema({
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
    address:{
        type:String,
        required:true
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
    doctors:{
        type:Number,
        required:true
    },
    beds:{
        type:Number
    },
    location:{
        lat:String,
        lon:String
    },
    website:{
        type:String
    }
});

const HealthCenter = mongoose.model("HealthCenter",HealthCenterSchema);
module.exports = HealthCenter; 