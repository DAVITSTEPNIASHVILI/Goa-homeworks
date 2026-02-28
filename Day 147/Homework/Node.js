// 1)

// Task: Parse URL and Query Parameters

// Create a Node.js script that handles an incoming HTTP request and analyzes its URL.

// Requirements:

// Use the URL class to parse the request URL.

// Extract and display:

// The pathname of the URL

// All query parameters as key–value pairs

// Use the querystring module to:

// Parse the query string manually

// Access individual query values

// Send a response back to the client showing the parsed pathname and query data in a readable format.
const { createServer } = require("http")
const querystring = require("querystring")

const server = createServer((req,res) => {
    const url = req.url
    const classObj = new URL(url)
    const pathname = classObj.pathname
    const splittePathname = pathname.split("?")[1]
    const jsonFormat = querystring.parse(splittePathname)
    res.end(JSON.stringify(jsonFormat))
})

server.listen(3000, () => console.log("server is running on port 3000"))