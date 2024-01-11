const mongoose = require("mongoose");

const BloodSchema = new mongoose.Schema({
    bloodGrp:{
        type:String,
        required:true
    },
    unit:{
        type:Number,
        required:true
    },
    provider:{
        donor:{
            type:Boolean,
            default:false
        },
        bank:{
            type:Boolean,
            default:false
        },
        image:{
            type:String,
        },
        gender:{
            type:String,
        },
        name:{
            type:String,
            required:true
        },
        age:{
            type:Number,
            required:true
        },
        phoneNo:{
            type:String,
            required:true
        },
        email:{
            type:String,
            required:true
        },
        address:{
            doorNo:String,
            street:String,
            landmark:String,
            city:String,
            postalCode:String
        }
    },
    location:{
        lat:String,
        lon:String
    },
    verified:{
        type:Boolean,
        default:false
    },
})

const Blood = mongoose.model("Blood",BloodSchema);
module.exports = Blood;
