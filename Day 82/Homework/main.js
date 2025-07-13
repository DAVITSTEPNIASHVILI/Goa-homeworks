// 2-4)

// Assign an anonymous function to a variable that multiplies two numbers.
const multiply = function(num1, num2) {
    return num1 * num2
}
console.log(multiply(2,3))
// Pass an anonymous function into setInterval() to log a message every 2 seconds.
let count = 0
const interval = setInterval(function(){
    console.log("message")
    count++
    if (count == 5) {
        clearInterval(interval)
    }
},2000)
// Create an anonymous function as an event listener for a button click that displays an alert message.
let btn = document.getElementById("btn")
btn.addEventListener("click",function() {
    alert("message")
})
// 5-8)

// Write an arrow function that adds two numbers.
const add = (a,b) => a+b
console.log(add(3,5))
// Create an arrow function that checks if a number is even or odd.
const numStatus = (num) => {
    if (num % 2 === 0) {
        console.log("number is even")
    } else {
        console.log("number is odd")
    }
}
numStatus(2)
// Define an arrow function that takes a list of strings and returns their lengths in an array.
const getLengths = strings => {
    let lengths = []
    let i = 0
    for (const str of strings) {
        lengths[i] = str.length
        i++
    }
    return lengths
}
console.log(getLengths(["apple is fruit"]))
// Build an arrow function that filters out negative numbers from an array.
const filterNegatives = arr => {
    let result = []
    let i = 0
    for (const num of arr) {
        if (num >= 0) {
            result[i] = num
            i++
        }
    }
    return result
}
console.log(filterNegatives[1,2,4,-3])
// 9-11)

// Create an IIFE that prints “Hello, world!” to the console.
(()=>{
    console.log("Hello world!")
})()
// Write an IIFE that calculates the square of a given number.
(num=>{
    console.log(num**2)
})()
// Create an IIFE that gets an array of numbers and logs the sum of all elements.
(nums=>{
    let sum = 0
    for (const num of nums) {
        sum += num
    }
    console.log(sum)
})([1, 2, 3, 4, 5])