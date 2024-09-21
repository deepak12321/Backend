// import express from "express";
import { DB_NAME } from "../constants.js";
import mongoose from "mongoose";

const connectDB = async () => {
    try {
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`);
        console.log("MongoDB connection sucessfull !!!");
        console.log("connectionInstance :", connectionInstance);
    } catch (error) {
        console.log("Mongo DB connection Error : ", error);
        process.exit(1);
    }
}

export default connectDB;