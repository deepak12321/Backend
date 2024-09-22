import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";


const app = express();
// app.use is used to establish middleware

// Configurating CORS 
app.use(cors({
    origin: process.env.CORS_PRIGIN, // which url to allow to access the backend
    credentials: true
}));

app.use(express.json({
    limit: "16kb",  // limiting the data size in json format 
}));

app.use(express.urlencoded({
    limit: "16kb",
}));

app.use(express.static("public")); // used when we want to store file and photo to store in our server and use as public asset to access it

app.use(cookieParser());

export { app };
