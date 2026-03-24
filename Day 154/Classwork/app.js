import express from "express"

const app = express()

app.use(express.json())

app.use((req,res,next) => {
    console.log({
        method: req.method,
        url: req.url,
        query: req.query,
        body: req.body
    })

    next()
})

app.use("/isWorking", (req,res,next) => {
    console.log(req.path, req.query)
    res.status(200).json([req.path, req.query])
    next()
})

app.listen(3000, () => console.log("Server is running on port 3000"))