// 3)

// Greet a User

// Create a string using a template literal that includes a user's name and age in a greeting message.
let name1 = "Davit"
let age = 20
let message = `Hello, my name is ${name1} and I am ${age} years old.`
console.log(message)
// 4)

// Multi-line Message

// Use a template literal to create a multi-line string that displays a short poem or a quote across several lines.
let poem = `Roses are red,
Violets are blue,
JavaScript is fun,
And so are you.`
console.log(poem)
// 5)

// Math Result Message

// Display a message that includes two numbers, their sum, and their product — all calculated and shown within the template literal.
let a = 5
let b = 3
let twoNumber = `Here are the numbers: ${a} and ${b}
Their sum is: ${a + b}
Their product is: ${a * b}`
console.log(twoNumber)
// 6)

// Traffic Light Status

// Create a switch case to check a traffic light color ("red", "yellow", "green") and log what action a driver should take.
let ligth = "green";
switch (ligth) {
    case "red":
        console.log("You are not going")
        break
    case "yellow":
        console.log("You have to be ready for ride")
        break
    case "green":
        console.log("Just ride")
        break
}
// 7)

// Simple Calculator Operation

// Use a switch case to perform a basic math operation ("add", "subtract", "multiply", "divide") based on a string input.
let num1 = 10
let num2 = 5
let operation = "multiply"
switch (operation) {
    case "add":
        console.log(`The result of ${operation} is: ${num1 + num2}`)
        break
    case "subtract":
        console.log(`The result of ${operation} is: ${num1 - num2}`)
        break
    case "multiply":
        console.log(`The result of ${operation} is: ${num1 * num2}`)
        break
    case "divide":
        console.log(`The result of ${operation} is: ${num1 / num2}`)
        break
    default:
        console.log("Unknown operation")
}
// 8)

// Season Identifier

// Create a switch case that takes the name of a month and returns which season it belongs to (e.g., "January" = "Winter").
let month = "April" // სცადე შეცვალო: "January", "July", "October" და ა.შ.

switch (month) {
    case "December":
    case "January":
    case "February":
        console.log(`${month} is in the Winter season`)
        break
    case "March":
    case "April":
    case "May":
        console.log(`${month} is in the Spring season`)
        break
    case "June":
    case "July":
    case "August":
        console.log(`${month} is in the Summer season`)
        break
    case "September":
    case "October":
    case "November":
        console.log(`${month} is in the Autumn season`)
        break
    default:
        console.log("Unknown month")
}
// 9)

// User Role Access

// Write a switch case to check a user role ("admin", "editor", "subscriber") and log what level of access they have.
let userRole = "editor"
switch (userRole) {
    case "admin":
        console.log("Access level: Full access")
        break
    case "editor":
        console.log("Access level: Can edit content")
        break
    case "subscriber":
        console.log("Access level: Can view content")
        break
    default:
        console.log("Access level: No access")
}