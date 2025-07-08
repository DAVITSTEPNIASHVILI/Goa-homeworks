// 5-9)

// Print numbers from 1 to 20, but stop the loop if the number is 13.
let i = 1
while (i <= 20) {
    console.log(i)
    if (i === 13) {
        break
    }
    i++
}
// Loop through an array of colors and stop when you find "blue".
let colors = ["red", "green", "blue", "yellow", "purple"]
for (let color of colors) {
    if (color === "blue") {
        break
    }
    console.log(color)
}
// Count from 1 to 50, but stop when the number is divisible by both 4 and 5.
for (let i = 1; i <= 50; i++) {
    if (i % 4 === 0 && i % 5 === 0) {
        break
    }
    console.log(i)
}
// Print each letter in a word, and stop when the letter is "a".
let word = "elephant"
for (let letter of word) {
    if (letter === "a") {
        break
    }
    console.log(letter)
}
// Keep adding numbers from 1 upwards, and stop when the total sum reaches 100.
let sum = 0
let num = 1
while (true) {
    sum += num
    if (sum >= 100) {
        break
    }
    num++
}
console.log("Stopped at:", num, "Total sum:", sum)
// 10-14)

// Print numbers from 1 to 20, but skip (don’t print) the number 13.
for (let i = 1; i <= 20; i++) {
    if (i === 13) {
        continue
    }
    console.log(i)
}
// Loop through an array of fruits and skip printing "banana".
let fruits = ["apple", "banana", "orange", "kiwi"]
for (let fruit of fruits) {
    if (fruit === "banana") {
        continue
    }
    console.log(fruit)
}
// Count from 1 to 30, but skip numbers that are divisible by 3.
for (let i = 1; i <= 30; i++) {
    if (i % 3 === 0) {
        continue
    }
    console.log(i)
}
// Print each letter in a word, but skip the letter "e".
let word1 = "cheese"
for (let letter of word) {
    if (letter === "e") {
        continue
    }
    console.log(letter)
}
// Loop through numbers from 1 to 50, and skip all even numbers.
for (let i = 1; i <= 50; i++) {
    if (i % 2 === 0) {
        continue
    }
    console.log(i)
}
// 15-19)

// Create an arrow function that adds two numbers and returns the result.
const add = (a, b) => a + b
console.log(add(5, 3))
// Write an arrow function that takes a name and returns a greeting message like "Hello, John!".
const greet = name => `Hello, ${name}!`
console.log(greet("John"))
// Make an arrow function that takes an array of numbers and returns a new array with each number doubled.
const doubleNumbers = arr => arr.map(num => num * 2)
console.log(doubleNumbers([1, 2, 3]))
// Create an arrow function that checks if a number is even and returns true or false.
const isEven = num => num % 2 === 0
console.log(isEven(4))
console.log(isEven(7))
// Write an arrow function that takes a string and returns its length.
const getLength = str => str.length
console.log(getLength("Hello"))
// 20-24)

// Create a function that prints all the arguments passed to it using a loop.
function printArgs() {
    for (let arg of arguments) {
        console.log(arg)
    }
}
printArgs("one", 2, true, "done")
// Write a function that counts how many arguments were passed and prints the count.
function countArgs() {
    console.log("Total arguments:", arguments.length)
}
countArgs(1, 2, 3, 4)
// Make a function that adds all numeric arguments together and prints the total.
function sumNumbers() {
    let total = 0
    for (let arg of arguments) {
        if (typeof arg === "number") {
            total += arg
        }
    }
    console.log("Total sum:", total)
}
sumNumbers(5, "a", 10, true, 3) 
// Create a function that stops printing arguments when it finds the value 0, using a break.
function printUntilZero() {
    for (let arg of arguments) {
        if (arg === 0) {
            break
        }
        console.log(arg)
    }
}
printUntilZero(4, 7, "test", 0, 9)
// Write a function that skips any string argument and only prints numeric ones using a continue.
function printOnlyNumbers() {
    for (let arg of arguments) {
        if (typeof arg === "string") {
            continue
        }
        console.log(arg)
    }
}
printOnlyNumbers(1, "apple", 3, "banana", 5)