// require('dotenv').config({path:'./env'})

import dotenv from "dotenv"
// import mongoose from "mongoose";
// import { DB_NAME } from "./constants.js";
import connectDB from "./db/index.js";

dotenv.config({
    path: './env'
});


connectDB();













/*
import express from "express";

const app = express();

// iffi --> start the function immidiently
; (async () => {
    try {
        mongoose.connect(`${process.env.MongoDB_URL}/${DB_NAME}`);
        app.on("error", (error) => {
            console.log("Error", error);
        })

        app.listen(process.env.PORT, () => {
            console.log("App is Listening on port :", process.env.PORT)
        })

    } catch (error) {
        console.error("Error:", error);
        throw error;
    }
})()
    */