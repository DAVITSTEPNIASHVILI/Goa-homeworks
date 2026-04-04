import express from "express"
import dotenv from "dotenv"

const app = express()

dotenv.config()

app.use(express.json())

let arr = [
    {
        id: 0,        
        name: "David",
        surname: "Stepniashvili"
    },
    {
        id: 1,
        name: "vigac",
        surname: "vagacashvili",
    }
]

app.get("/products", (req, res) => {
    res.status(200).json(arr)
})

app.get("/products/:id", (req,res) => {
    const id = Number(req.params.id)

    const foundProduct = arr.filter(obj => obj.id === id)[0]

    res.status(200).json(foundProduct)
})

app.post("/products", (req,res) => {
    const body = req.body

    arr.push(body)

    res.status(200).json(arr)
})

app.put("/products/:id", (req, res) => {
    const id = Number(req.params.id)

    const body = req.body

    const foundProduct = arr.filter(obj => obj.id === id)[0]

    body.name = foundProduct.name
    body.surname = foundProduct.surname

    res.status(200).json(foundProduct)
})

app.listen(process.env.PORT, () => console.log(`Server is running on port ${process.env.PORT}`))