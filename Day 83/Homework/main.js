// 6-8)

// Create a function with a local variable and attempt to access it outside the function. Explain what happens and why.

// function logalVariable(){
//     let num = 5 // ამ ცვლადს მიენიჭა function scope ამის გამო მისი გამოყენება მხოლოდ ფუნქციაში შეიძლება
// }
// console.log(num) // error-ს გამოიტანს

// Write nested functions where an inner function modifies a variable from its outer function's scope. Track how the value changes before and after the inner function call.

// function changingValue(){
//     let num = 5
//     console.log(num)
//     function changingValue1(){
//         num = 10
//         console.log(num)
//     }
//     changingValue1()
// }
// changingValue()

// Demonstrate the difference between var, let, and const in terms of scope inside a block {} and a function.

// block scope

// let და const შექმნილი ცვლადები block scope-ზე მხოლოდ ასეთ - {} ფრჩხილებში იმუშავებს. ანუ ასეთ {} ფრჩხილებში თუ შევქმნით ცვლადს მისი გამოყენება მხოლოდ მანდ შეგვიძლია და არა მის გარეთ

// var-ით შექმნილი ცვლადები შეგვიძლია ასეთი {} ფრჩხილების გარეთაც გამოვიყენოთ, თუ ჯერ დავბეჭდავთ და მერე ასეთ {} ფრჩხილებში შევქმნით გამოიტანს undefined

// function scope

// ყველა keyword-ით შექმნილი ცვლადი გამოიყენება მხოლოდ ფუნქციაში

// 9-13)

// Evaluate the string "2 + 2" using eval and log the result.

// console.log(eval("2 + 2"))

// Use eval to declare a variable x = 10 inside the string, then try logging x outside eval.

// eval("var x = 10")
// console.log(x)

// Define a string with a function inside it like "function greet() { return 'Hello'; }" and run it with eval. Then call the function.

// eval("function greet() {return 'Hello';}")
// console.log(greet())

// Create a variable message = 'Hi' outside eval, then run eval("console.log(message)").

// let message = "Hi"
// eval("console.log(message)")

// Try taking a string from prompt() and run eval on it. Test with both a number expression and a string message.

// let input = prompt("Type something: ")
// let result = eval("input")
// console.log(result)

// 14-16)

// Check if the value "hello" is NaN using isNaN and log the result.

// console.log(isNaN("Hello"))

// Ask the user for input with prompt(), then check if the input is a number using isNaN.

// let input = prompt("Enter something: ")
// console.log(isNaN(input))

// Test isNaN with the values NaN, undefined, null, true, and "123" and log the results for each.

// console.log(isNaN(isNaN))
// console.log(isNaN(undefined))
// console.log(isNaN(null))
// console.log(isNaN(true))
// console.log(isNaN("123"))

// 17-20)

// Convert the string "42" to a number using parseInt and log the result.

// console.log(parseInt("42"))

// Use parseInt on the string "42px" and see what it returns.

// console.log(parseInt("42px"))

// Try parseInt on the string "abc" and check the result.

// console.log(parseInt("abc"))

// Use parseInt inside a loop to convert an array of string numbers like ["10", "20", "30"] to numbers and log each one.

// const stringNumbers = ["10", "20", "30"];
// for (let i = 0; i < stringNumbers.length; i++) {
//     console.log(parseInt(stringNumbers[i], 10))
// }

// 21-25)

// Convert the string "3.14" to a number using parseFloat and log the result.

// console.log(parseFloat("3.14"))

// Use parseFloat on the string "3.14abc" and check what it returns.

// console.log(parseFloat("3.14abc"))

// Try parseFloat on the string "abc3.14" and see the result.

// console.log(parseFloat("abc3.14"))

// Pass a whole number string like "100" to parseFloat and log the result.

// console.log(parseFloat("100"))

// Use parseFloat on an array of mixed strings like ["10.5", "20.0", "abc", "30.7xyz"] in a loop and log the results.

// const mixedStrings = ["10.5", "20.0", "abc", "30.7xyz"];
// for (let i = 0; i < mixedStrings.length; i++) {
//     console.log(parseFloat(mixedStrings[i]))
// }

