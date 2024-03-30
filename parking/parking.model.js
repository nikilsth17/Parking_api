import mongoose from "mongoose";


const parkingSchema= new mongoose.Schema({
    slotNumber:{
        type:String,
        required:true,
        minlength:2
    },
    vehicleNumber:{
        type:String,
        required:true,
        minlength:2
    },
    bookedTime:{
        type:String,
        required:true
    },
    expiredTime:{
        type: String,
        required:true
    }
})


export const Parking= mongoose.model("Parking",parkingSchema);