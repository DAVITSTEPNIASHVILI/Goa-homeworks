const http = require("http")

const products = [
    {
        id: 0,
        name: "Banana",
        price: 2.00
    },
    {
        id: 1,
        name: "Apple",
        price: 4.00
    }
]

function getRequestBody(req) {
    return new Promise((resolve, reject) => {
        let data = '';

        req.on('data', chunk => {
            data += chunk;
        });

        req.on('end', () => {
            resolve(data);
        });

        req.on('error', err => {
            reject(err);
        });
    });
}

const server = http.createServer(async (req, res) => {
    switch(req.method) {
        case "GET":
            res.statusCode = 200
            return res.end(JSON.stringify(products))
        case "POST":
            const returnedInfo = await getRequestBody(req)
            const jsInfo = JSON.parse(returnedInfo)
            
            products.push(jsInfo)
            res.statusCode = 200
            return res.end(JSON.stringify(products))
    }
})

server.listen(3000, () => console.log("Server is runnig on port 3000"))