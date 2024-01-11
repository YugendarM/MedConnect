const mongoose = require("mongoose");
const MedicalSupplySchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    unit:{
        type:String,
        required:true
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

const MedicalSupply = mongoose.model("MedicalSupply",MedicalSupplySchema);
module.exports = MedicalSupply;