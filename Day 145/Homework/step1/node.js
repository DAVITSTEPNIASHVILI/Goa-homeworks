// const { readFile } = require("fs")
const { readFile } = require("fs/promises")

// const getDataTxt = (err, value) => {
//     if (err) {
//         console.log({err})
//     } else {
//         console.log("Oparation Complated!")
//         console.log(value)
//     }
// }

// readFile("text.txt", "utf-8", getDataTxt) // fs

// const getDataJson = (err, value) => {
//     if (err) {
//         console.log({err})
//     } else {
//         console.log("Operation Complated!")
//         console.log(JSON.parse(value))
//     }
// }

// readFile("json_info.json", "utf-8", getDataJson) // fs

// const getDataTxt1 = async () => {
//     try {
//         console.log(await readFile("text.txt", "utf-8"))
//     } catch (error) {
//         console.log(error)
//     }
// }
// getDataTxt1() // fs/promises

// const getDataJson1 = async () => {
//     try {
//         console.log(JSON.parse(await readFile("json_info.json", "utf-8")))
//     } catch (error) {
//         console.log(error)
//     }
// }

// getDataJson1() // fs/promises