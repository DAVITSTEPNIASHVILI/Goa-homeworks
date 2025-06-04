// Check if two numbers are both greater than 10.
if (5+7 > 10) {
    console.log(true)
}else {
    console.log(false)
}
// Check if at least one of two conditions is true.
let a = 5<6
let b = 10<4
if (a === true || b == true) {
    console.log("One of them is true")
}else {
    console.log("Non of them is true")
}
// Use the NOT operator to invert a boolean value.
let work = true
let notWorking = !work
console.log(notWorking)
// Combine multiple logical operations in a single expression.
console.log(5>3 || 4<4 || 23>=554 && 435>42)
// Convert a number to a string using String().
let num = 5
num = String(num)
console.log(num)
// Convert a boolean value to a string using String().
let bool = true
bool = String(bool)
console.log(bool)
// Convert a string containing a number to a number using Number().
let string = "456"
string = Number(string)
console.log(string)
// Use Number() to convert a boolean to a number.
let bool1 = false
bool1 = Number(bool1)
console.log(bool1)
// Check what happens when you use Number() on a non-numeric string.
let string2 = "Hello"
string2 = Number(string2)
console.log(string2)
// Check if a Number is Positive or Negative
let num1 = 555
if (num1 > 0) {
    console.log("Number is positive")
} else {
    console.log("Number is negative")
}
// Ask the user to enter a number.
let num2 = Number(prompt("Enter number"))
// Use an if statement to check if it’s positive, negative, or zero, and display a message.
if (num1 > 0) {
    console.log("Number is positive")
} else if (num1 === 0) {
    console.log("Number is zero")
} else {
    console.log("Number is negative")
}
// Check User’s Age for Voting Eligibility
let userAge = 19
if (userAge > 18) {
    console.log("you can vote")
} else {
    console.log("you can't vote")
}
// Ask the user to enter their age.
let promptUserAge = Number(prompt("Enter your age: "))
// If the age is 18 or above, show a message saying “You can vote!” Otherwise, show “You are not eligible to vote.”
if (userAge > 18) {
    console.log("You can vote!")
} else {
    console.log("You are not eligible to vote.")
}
// Compare Two Numbers
let compare = 5<5
// Ask the user to enter two numbers.
let num3 = Number(prompt("Enter number: "))
let num4 = Number(prompt("Enter number: "))
// Use an if...else statement to check which number is larger, or if they are equal, and display a message.
if (num3 > num4) {
    console.log("First number is larger")
} else if (num4 > num3) {
    console.log("Second number is larger")
} else if (num3 === num4) {
    console.log("They are equal")
}
