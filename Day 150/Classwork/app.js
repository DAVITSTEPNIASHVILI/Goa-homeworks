// const ReadFile = require("./Utils/Readfile")
// const DB = "./Database/products.json"

// const func = async DB => {
//     return await ReadFile(DB)
// }

// func(DB)

const express = require("express")
const app = express();
app.listen(3000, () => console.log("Server is running on port 3000"))