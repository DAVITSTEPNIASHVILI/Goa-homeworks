import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";

// Routers
import booksRouter from "./router/books.route.js";

// configuration for env variables
dotenv.config()

// create a server
const app = express();

app.use(express.json())
app.use("/api/books", booksRouter)

mongoose.connect(process.env.DB_CONNECTION)
    .then(() => {
        console.log("Server is connected to database!")

        app.listen(process.env.PORT, () => console.log(`Server is running on port ${process.env.PORT}`))
    })