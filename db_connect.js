import mongoose from "mongoose";


export const dbConnect= async()=>{
    try{
        await mongoose.connect(process.env.MONGO_URL);
        console.log("Database connection OK...");
    }
    catch(error){
        console.log("Database connection failed!!");
        console.log(error.message);
    }
}