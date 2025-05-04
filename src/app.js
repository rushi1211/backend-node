import express from 'express'
import cors from "cors"
import cookieParser from 'cookie-parser';

const app=express();

app.use(cors({
    origin : process.env.CORS_ORIGIN,
    credentials:true
}))

app.use(express.json({limit:"16kb"})) // getting form data then we required this config
app.use(express.urlencoded({extended:true, limit:"16kb"})) //URL through data coming 
app.use(express.static("public"))//storing files on local directory
app.use(cookieParser())

export { app };