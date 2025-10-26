// 3-7)

// Check Even or Odd:
// Write a program that uses the ternary operator to check if a given number is even or odd, and print "Even" or "Odd".
let num = 8
console.log(num%2 === 0 ? "Even" : "Odd")
// Find the Greater Number:
// Use a ternary operator to determine which of two numbers is greater and display the larger one.
console.log(5 > 7 ? "5" : "7")
// Check Voting Eligibility:
// Use a ternary operator to check if a person is old enough to vote (age ≥ 18). Print "Eligible" or "Not Eligible".
let age = 30
console.log(age > 18 ? "Eligible" : "Not Eligible")
// Assign Grade:
// Given a score, use a ternary operator to assign "Pass" if the score is ≥ 50, otherwise "Fail".
let score = 70
console.log(score > 50 ? "Pass" : "Fail")
// Check for Positive, Negative, or Zero:
// Use nested ternary operators to determine whether a number is positive, negative, or zero.
let whether = 50
console.log(whether > 0 ? "Positive" : "Negative")
console.log(whether === 0 ? "Zero" : "Not zero")
// 8-9)

// Merge Arrays:
// Use the spread operator to merge two arrays (e.g., arr1 and arr2) into a single new array.
const myFunc = (arr1,arr2) => {
    const newArr = [...arr1,...arr2]
    console.log(newArr)
}
myFunc([1,3,4],[43,325,245])
// Copy and Modify an Object:
// Create a copy of an existing object using the spread operator, then modify one of its properties in the copied object without affecting the original.
const myObj = {
    name : "Taso",
    surname : "Stepniashvili"
}
const copiedObj = {...myObj}
copiedObj.name = "Dato"
console.log(myObj)
console.log(copiedObj)
// 10-11)

// Sum of Numbers:
// Create a function that uses the rest operator to accept any number of arguments and returns their total sum.
const sumAll = (...numbers) => {
    let sumNum = 0
    for (let num of numbers) {
        sumNum += num
    }
    console.log(sumNum)
}
sumAll(1, 2, 3, 4)
// Extract Remaining Properties:
// Given an object, use the rest operator in destructuring to extract one specific property and store the remaining properties in another object.
const myObj1 = {
    name : "David",
    surname : "Stepniashvili"
}
const {name, ...obj} = myObj1
console.log(obj)
// 12-13)

// Export and Import a Function:
// Create a module file that exports a function (e.g., greet(name)). In another file, import and call that function.
import { greet } from "../Homework/a.js";
greet("David")
// Export Multiple Values:
// Create a module that exports multiple constants or functions (e.g., PI, area(), circumference()). Import them into another file and use them in calculations.
export const sum = (num1,num2) => {
    console.log(num1 + num2)
}