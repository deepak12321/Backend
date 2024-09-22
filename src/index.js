import dotenv from "dotenv"
import connectDB from "./db/index.js";

dotenv.config({
    path: './env'
});


connectDB().then(() => {

    app.listen(process.env.PORT || 8000, () => {
        console.log("Server Started at Port : ", process.env.PORT);
    });

}).catch((error) => {

    console.log("Mongo DB Connection Failed :", error);

})













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