import mongoose from "mongoose";
import dotenv from 'dotenv'


dotenv.config()

const MONGO_URL = process.env.DATABASE_URL

if(!MONGO_URL){
    throw new Error("Database Url not found !")
}

export const connectDB = async ()=>{
    try{
        await mongoose.connect(MONGO_URL as string);
        console.log("Database connected succesfully")
    }catch(error:any){
        throw new Error(error.message || "Failed to connect to DB")
    }
}

