import mongoose from "mongoose";
import { DB_NAME } from "../constant.js";

const connectDB = async () =>{
    try {
        const connectionObj= await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        console.log(`MongoDB connected successfully...!! ${connectionObj.Connection}`);
        
    } catch (error) {
        console.error("MongoDB connection Filed..!!", error)
        process.exit(1)
    }
} 

export default connectDB;