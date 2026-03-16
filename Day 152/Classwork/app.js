import express from "express"

let fruits = [
    {
        id: 0,
        name: "banana",
        price: 2.00,
        category: "a"
    },
    {
        id: 1,
        name: "apple",
        price: 3.00,
        category: "b"
    },
    {
        id: 2,
        name: "orange",
        price: 2.50,
        category: "a"
    },
    {
        id: 3,
        name: "kiwi",
        price: 2.00,
        category: "a"
    },
    {
        id: 4,
        name: "banana",
        price: 2.00,
        category: "a"
    },
    {
        id: 5,
        name: "apple",
        price: 2.00,
        category: "a"
    },
    {
        id: 6,
        name: "orange",
        price: 2.00,
        category: "a"
    },
    {
        id: 7,
        name: "kiwi",
        price: 2.00,
        category: "a"
    },
    {
        id: 8,
        name: "banana",
        price: 2.00,
        category: "a"
    },
    {
        id: 9,
        name: "apple",
        price: 2.00,
        category: "a"
    }
]

const app = express()

app.get("/products", (req,res) => {
    const {query} = req

    if (query.category) {
        fruits = fruits.filter(a => a.category === query.category)
    }

    res.status(200).json(fruits)
})

app.listen(3000, () => console.log("Server is running on port 3000"))