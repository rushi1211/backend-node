import mongoose from "mongoose";
import connectDB from "./db/index.js";

import dotenv from "dotenv";
import { app } from "./app.js";

dotenv.config();

connectDB()
.then(()=>{
    const port=process.env.PORT || 8000;
    app.listen(port, ()=>{
        console.log(`Server running at port : ${port}`);
        
    })
})
.catch((err)=>console.log('MongoDB connection failed !!!',err));