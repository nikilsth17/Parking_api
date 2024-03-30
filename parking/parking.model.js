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
    }
})


export const Parking= mongoose.model("Parking",parkingSchema);