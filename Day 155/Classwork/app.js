import express from "express"
import morgan from "morgan"
import bodyParser from "body-parser"
import errorHandler from "errorhandler"

const app = express()

app.use(morgan("dev"))
app.use(bodyParser.json())

app.get("/users/:id", (req,res, next) => {
    const err = new Error("This is error!")
    err.status = 404

    return next(err)
})
app.use(errorHandler())

app.listen(3000, () => console.log("Server is running on port 3000"))