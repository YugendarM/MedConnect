const mongoose = require("mongoose");

const RequestSchema = new mongoose.Schema({
    requesterName:{
        type:String,
        required:true,
    },
    patientName:{
        type:String,
        required:true
    },
    gender:{
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
    },
    phoneNo:{
        type:String,
        required:true
    },
    bloodGrp:{
        type:String,
        required:true
    },
    upiId:{
        type:String,
    },
    age:{
        type:Number,
        required:true,
    },
    problem:{
        type:String,
        required:true
    },
    hospital:{
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
        }
    },
    requestForBlood:{
        req:{
            type:Boolean,
            default:false,
        },
        bloodGrp:String,
        unit:Number
    },
    requestForFinancialSupport:{
        req:{
            type:Boolean,
        default:false,
        },
        costOfTreatment:Number
    },
    requestForMedicine:{
        req:{
            type:Boolean,
        default:false,
        },
        name:String,
        dose:Number, 
    },
    requestForMedicalSupply:{
        req:{
            type:Boolean,
        default:false
        },
        name:String,
        quantity:Number,
        otherDetails:String
    },
    emergency:{
        type:Boolean,
        default:false
    },
    location:{
        lat:String,
        lon:String
    },
    verified:{
        type:Boolean,
        default:false
    },
    verificationToken:{
        type:String,
    },
    createdAt:{
        type:Date,
        default:Date.now
    }
});

const Request = mongoose.model("Request",RequestSchema);
module.exports = Request;