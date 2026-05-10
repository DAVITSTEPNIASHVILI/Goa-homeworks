import express from "express";
import dotenv from "dotenv"

const app = express()

dotenv.config()

app.use("/api/status", (req,res,next) => {
    res.status(200).send({message: "Server is running"})
    next()
})

app.listen(process.env.PORT, () => console.log(`Server is running on port ${process.env.PORT}`))