const events = require("events")
// // 1)

// // Create a basic event emitter
const myEmitter = new events.EventEmitter()
// // Import the events module.
// // const events = require("events")
// // Create an instance of EventEmitter.
// const events2 = new events()
// // Register a custom event listener.
// myEmitter.on('register', username => {
//     console.log(username)
// })
// myEmitter.emit("register", "david")
// // Emit the event and observe the output.
// myEmitter.on('output', smth => {
//     console.log(smth)
// })
// myEmitter.emit('output', "group 54")

// // 2)

// // Handle an event with arguments
// myEmitter.on('group 54', lesson => {
//     console.log(`Lesson: ${lesson}`)
// })
// myEmitter.emit('group 54', '144')
// // Create an event listener that accepts parameters.
// myEmitter.on('hello', hello => {
//     console.log(hello)
// })
// myEmitter.emit('hello', 'hello')
// // Emit the event while passing data (e.g., a message or number).
// myEmitter.on('greet', (message,number) => {
//     console.log(message);
//     console.log(number)
// })

// myEmitter.emit('greet', 'Hello, world!', 5)
// // Confirm the listener receives and uses the data.
// myEmitter.on('calculate', (number) => {
//     const result = number * 2
//     console.log(`Received: ${number}`)
//     console.log(`Doubled value: ${result}`)
// })
// myEmitter.emit('calculate', 10)
// 3)

// Read user input from the terminal
// process.stdin.on("data", input => {
//     console.log(input.toString())
// })
// Set the standard input to accept text.
// process.stdin.on("data", (standard) => {
//     console.log(standard.toString().trim() || "default text")
// })

// Listen for incoming data from process.stdin.
// process.stdin.on("data", username => {
//     console.log(username.toString())
// })
// Display whatever the user types back to the console.
// process.stdin.on("data", username => {
//     console.log(username.toString())
// })

// // 4)

// // Trim and format input
// process.stdin.on("data", username => {
//     console.log(`Username: ${username.toString().trim()}`)
// })
// // Capture input from process.stdin.
// process.stdin.on("data", username => {
//     console.log(username.toString())
// })
// // Remove extra whitespace or newlines.
// process.stdin.on("data", username => {
//     console.log(`Username: ${username.toString().trim()}`)
// })
// // Transform the input (e.g., convert to uppercase) before displaying it.
// process.stdin.on("data", username => {
//     console.log(`Username: ${username.toString().trim().toUpperCase()}`)
// })

// // 5)

// // Create a buffer with a fixed size.
const { Buffer } = require("buffer")
// const myBuffer = Buffer.alloc(4, "data")
// // Fill it with data.

// // Display the buffer contents.
// console.log(myBuffer)

// // 6)

// // Take a string input.
// const string = "hello"
// // Convert the string into a buffer.
// const buffer = Buffer.from(string)
// // Output the buffer and verify its byte representation.
// console.log(buffer)

// // 7)

// // Start with a buffer containing text data.
// const textBuffer = Buffer.from("data")
// // Decode the buffer into a string.
// const bufferToString = textBuffer.toString()
// // Display the result.
// console.log(bufferToString)

// 8)

// Create a buffer with initial content.
const buffer1 = Buffer.alloc(4,"data")
const buffer2 = buffer1.toString()
// Change specific bytes in the buffer.
buffer2[3] = "o"
// Observe how the buffer content changes.
console.log(buffer2)