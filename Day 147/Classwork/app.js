const { createServer } = require("http")
const querystring = require("querystring")
const server = createServer((req,res) => {
    // const response = {
    //     method: req.method,
    //     path: req.url
    // }

    // res.end(JSON.stringify(response))
    // res.end(req.method === "GET" ? res.end("Hello") : res.end("good bye"))

    const myUrl = new URL("http://localhost:3000" + req.url)
    res.end(JSON.stringify(querystring.parse(myUrl.search)))
    console.log(myUrl)
})

server.listen(3000, () => console.log("Server is runnig on port 3000"))