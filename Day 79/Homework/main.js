// 1. Copy object keys to array
// Use a for...in loop to extract all keys from an object and save them into an array.
// Example: {name: 'John', age: 30} → ['name', 'age']
// let myObj = {
//     name:"john",
//     age: 30
// }
// for (let key in myObj) {
//     console.log(key)
// }
// 2. Sum only numeric properties
// Use a for...in loop to sum only the properties that have numeric values in an object.
// Example: {a: 10, b: 'hi', c: 20} → Total: 30
// let myObj = {
//     a: 10,
//     b: "hi",
//     c: 20
// }
// let total = 0
// for (let key in myObj) {
//     if (typeof myObj[key] === "number") {
//         total += myObj[key]
//     }
// }
// console.log(total)
// 3. Convert object to key=value string
// Use a for...in loop to create a string like this: "name=John, age=30, city=Paris" from an object.
// let myObj = {
//     name: "John",
//     age:30,
//     city:"Paris"
// }
// for (let keyValue in myObj) {
//     console.log(String(String(keyValue) + "=" + String(myObj[keyValue])))
// }
// 4. List all keys with their types
// Use a for...in loop to print each key and the type of its value.
// Example: name: string, age: number
// let myObj = {
//     name: "John",
//     age:30,
// }
// for (let keyValue in myObj) {
//     console.log(typeof myObj[keyValue])
// }
// 5. Detect nested object
// Write a for...in loop that checks if any value in an object is another object (not a primitive). If yes, log: "Nested object found at key: ___".
// let myObj = {
//     name: "John",
//     age:30,
//     city: {city:"Tbilisi", address: "Gldani"}
// }
// for (let keyValue in myObj) {
//     if (typeof myObj[keyValue] === "object") {
//         console.log("Nested object found at key: " + keyValue)
//     }
// }

// 6. Filter long words
// Given an array of words, use a for...of loop to print only the words with more than 5 characters.
// const words = ["Daviti","Anastasia","Gio"]
// for (let longWords of words) {
//     if (longWords.length > 5) {
//         console.log(longWords)
//     }
// }
// 7 Create a string from characters
// Given an array of characters like ['H','e','l','l','o'], use a for...of loop to join them into a word and print it.
// let hello = ['H','e','l','l','o']
// let word = ""
// for (let join of hello) {
//     word += join
// }
// console.log(word)
// 8 Multiply numbers until over 1000
// Start with 1, and multiply it by 2 in a do...while loop until the number goes over 1000. Log each step.
// let i = 0
// let num
// do {
//     num = 2 ** i
//     console.log(num)
//     i++
// } while (num <= 1000)
// 9 Collect user inputs
// Keep asking the user for numbers using prompt() in a do...while loop. Stop when the user types "stop". Store all the inputs in an array and print it.
// let inputs = []
// let userInput = ""
// let i = 0
// do {
//     userInput = prompt("Enter a number (or type 'stop' to finish):")
//     if (userInput !== "stop") {
//         inputs[i] = userInput
//         i++
//     }
// } while (userInput !== "stop")
// 10. Countdown timer with step
// Create a do...while loop that counts down from 30 to 0 in steps of 3 and prints each value
// let num = 30
// do {
//     console.log(num)
//     num -= 3
// } while (num >= 0)