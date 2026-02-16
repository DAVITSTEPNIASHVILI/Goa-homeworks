const { error } = require('console')
const os = require('os')
const process = require('process')

// 2-10)

// Check the operating system platform using the process object and display it.
console.log(os.type())
// Check the operating system platform using the process object and display it.
// that's past work
// Read command-line arguments and print each argument on a new line.
console.log(process.argv[0])
console.log(process.argv[1])
// Display the operating system name and version using os.
console.log(os.hostname())
console.log(os.type())
// Show the total system memory and free memory using os. 
console.log(process.memoryUsage())
// List the home directory of the current user using os.
console.log(os.homedir())
// Print the system uptime in seconds using os.
console.log(os.uptime())
// Print a normal message, a warning, and an error using different console methods.
console.log("hello")
console.table("hello")
console.assert("hello" === "hello")

// console.log(name)
// console.table(name)
// console.assert(name = name)

console.log(error)
console.table(error)
console.assert(error !== error)
// Display an object in table format.
const obj = {
    "name": "david",
    "age": 12
}
console.table(obj)