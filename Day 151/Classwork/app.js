const express = require("express")

const arr = ["hello", "world", "server", "port", "express"]

const app = express()

app.use(express.json())

app.get("/info", (req, res) => {
    res.status(200).json(arr)
})

app.post("/info", (req, res) => {
    const newInfo = req.body
    arr.push(newInfo)

    res.status(200).json(arr)
})

app.listen(3000, () => console.log("Server is running on port 3000"))
