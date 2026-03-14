const http = require("http")

const server = http.createServer((req,res) => {
    const arr = [
        {
            id: 0,
            name: "David",
            surname: "Stepniashvili",
            age: 12,
            country: "Georgia"
        },
        {
            id: 1,
            name: "David",
            surname: "Stepniashvili",
            age: 12,
            country: "Georgia"
        },
        {
            id: 2,
            name: "David",
            surname: "Stepniashvili",
            age: 12,
            country: "Georgia"
        }
    ]

    switch (req.method) {
        case "GET":
            res.statusCode = 200
            res.end(JSON.stringify(arr))
        case "POST":
            res.statusCode = 200
            res.end(req.body)
        case "PUT":
            res.statusCode = 200
            res.end("Stepniashvili David")
        case "DELETE":
            res.statusCode = 200
            const newRes = arr.slice(0,-1)
            res.end(JSON.stringify(newRes))
    }
})

server.listen(3000, () => console.log("server is running on port 3000."))