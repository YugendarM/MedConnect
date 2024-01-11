const mongoose = require("mongoose");

const MedicineSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    dose:{
        type:Number,
        required:true
    },
    brand:{
        type:String,
        required:true
    },
    purpose:{
        type:String,
        required:true,
    },
    provider:{
        name:{
            type:String,
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
    }

});

const Medicine = mongoose.model("Medicine",MedicineSchema);
module.exports = Medicine;