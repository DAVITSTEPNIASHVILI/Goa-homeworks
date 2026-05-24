import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";

// Routers
import booksRouter from "./router/books.route.js";
import globalErrorHandler from "./controllers/error.controller.js";
import { usersRouter } from "./router/users.route.js";

// configuration for env variables
dotenv.config()

// create a server
const app = express();

app.use(express.json())
app.use("/api/books", booksRouter)
app.use("/api/auth", usersRouter)
app.use("/api/status", (req, res, next) => {
    res.status(200).json({status: "Server is running"});
    next()
})
app.use(globalErrorHandler)

mongoose.connect(process.env.DB_CONNECTION)
    .then(() => {
        console.log("Server is connected to database!")

        app.listen(process.env.PORT, () => console.log(`Server is running on port ${process.env.PORT}`))
    })