const { Buffer } = require('buffer')
const process = require('process')

// process.stdin.on("data", favColor => {
//     console.log(favColor.toString())
//     process.stdout.write("Enter ur fav color: ")
// })

// process.stdout.write("Enter ur fav color: ")

const buffer1 = Buffer.alloc(5, "David")
const buffer2 = Buffer.from("David")
const buffer3 = Buffer.concat([buffer1, buffer2]).toString()
process.stdout.write(buffer3)