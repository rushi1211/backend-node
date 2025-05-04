import mongoose from "mongoose";
import { DB_NAME } from "../constant.js";

const connectDB = async () =>{
    try {
        console.log(`mongodb+srv://rushiWadekar:rushi7982@cluster1.npui7q9.mongodb.net/${DB_NAME}`,"<<<<<<<<<<<<y")
        const connectionObj= await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        // const connectionObj= await mongoose.connect(`mongodb+srv://rushiWadekar:rushi7982@cluster1.npui7q9.mongodb.net/${DB_NAME}`)
        console.log(`MongoDB connected successfully...!! ${connectionObj.Connection}`);
        
    } catch (error) {
        console.error("MongoDB connection Filed..!!", error)
        process.exit(1)
    }
} 

export default connectDB;