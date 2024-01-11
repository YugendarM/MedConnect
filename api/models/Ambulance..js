const mongoose = require("mongoose");
const AmbulanceSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    providerName:{
        type:String,
        required:true
    },
    address:{
        type:String,
    },
    city:{
        type:String,
    },
    phoneNO:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
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

const Ambulance = mongoose.model("Ambulance",AmbulanceSchema);
module.exports = Ambulance;
