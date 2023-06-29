import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
const app = express();
dotenv.config();

const connect = async () => {
    try{
        await mongoose.connect(process.env.MONGO);
        console.log("connected to mongoDB");
    }
    catch(err){
        handleError(err);
    }
}


app.listen(8080, () => {
    connect();
    console.log("app started");
})