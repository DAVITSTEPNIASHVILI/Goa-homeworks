import express from "express";
import dotenv from "dotenv";

// Routers
import booksRouter from "./router/books.route.js";
import globalErrorHandling from "./controllers/error.cotroller.js";

// configuration for env variables
dotenv.config()

// create a server
const app = express();

// middlewares
app.use(express.json());
app.use("/api/books", booksRouter);
app.use("/api/status", (req, res, next) => {
    res.status(200).json({status: "Server is running"});
    next()
})

app.use(globalErrorHandling)

app.listen(process.env.PORT, () => console.log(`Server is running on port ${process.env.PORT}`))