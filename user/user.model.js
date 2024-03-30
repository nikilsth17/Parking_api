import mongoose from "mongoose";

// create rule/schema 
const userSchema= new mongoose.Schema({
    email:{
        type:String,
        required:true,
        trim:true,
        lowercase:true,
        minlength:5,
        maxlength:55,
    },
    password:{
        type:String,
        required:true,
        trim:true,
    },
    fullName:{
        type:String,
        required:true,
        trim:true,
        minlength:2,
        maxlength:55,
    },
    location:{
        type:String,
        required:true,
        trim:true,
        minlength:2,
        maxlength:55,
    },
    phoneNumber:{
        type:Number,
        required:true,
        minlength:10,
    },
});

//create table
export const User= mongoose.model("User",userSchema);