// // 2-4)

// // Get the first character of a given string using charAt and display it.
// console.log("cat".charAt(0))
// // Retrieve the third character of a user-provided string and log it to the console.
// console.log("cat".charAt(2))
// // Check if the character at position 0 of a string is a capital letter.
// let str = "Hello";
// if (str[0] === str[0].toUpperCase()) {
//     console.log("The first character is a capital letter.");
// } else {
//     console.log("The first character is not a capital letter.");
// }
// // 5-7)

// // Convert a given string to lowercase and display the result.
// let string = "HELLO"
// console.log(string.toLowerCase())
// // Take user input, convert it to lowercase, and log it to the console.
// let input = prompt("Enter text: ")
// console.log(input.toLowerCase())
// // Check if two strings are equal, ignoring case differences by converting both to lowercase first
// if ("Hello".toLowerCase() === "HELLO".toLowerCase()) {
//     console.log("Strings are equal")
// }
// // 8-10)

// // Convert a given string to uppercase and display the result.
// console.log("hello".toUpperCase())
// // Take a user’s name as input, convert it to uppercase, and show it in an alert.
// let userName = prompt("Enter your name: ")
// alert(userName.toUpperCase())
// // Compare two strings by converting both to uppercase to check for equality, ignoring case.
// if("hello".toUpperCase() === "world".toUpperCase()) {
//     console.log("It's not equal")
// }
// // 11-13)

// // Concatenate two given strings using concat and display the result.
// console.log("hello".concat(" ", "world"))
// // Take a user’s first name and last name as input, combine them using concat, and display the full name.
// let firstName = prompt("Enter your first name: ")
// let lastName = prompt("Enter your last name: ")
// console.log(firstName.concat(" ",lastName))
// // Join three different strings into one sentence using the concat method.
// console.log("I'm".concat(" ","David"," ","Stepniashvili"))

// 14-16)

// Check if a given string ends with the word "done" and display true or false.
// console.log("well done".endsWith("done"))
// Take user input and verify if it ends with an exclamation mark ("!").
// let text = prompt("Enter text: ")
// console.log(text.endsWith("!"))
// Check if a filename string ends with ".jpg" and display a message accordingly.

// 18-20)

// Check if a given string contains the word "hello" and display true or false.
// console.log("hello world!".includes("hello"))
// Take a sentence as input and verify if it includes the user’s name.
// let userName = prompt("Enter your name: ")
// let text = prompt("Enter text")
// console.log(text.includes(userName))
// Check if an email string includes the "@" character.
// let email = prompt("Enter Email: ")
// console.log(email.includes("@"))
// 21-23)

// Find the position of the first occurrence of the letter "e" in a given string.
// console.log("hello".indexOf("e"))
// Take a user-provided sentence and get the index of the first space character.
// let userText = prompt("Enter text: ")
// console.log(userText.indexOf(" "))
// Find the index of the first occurrence of a comma "," in a string.
// console.log("Hello, world!".indexOf(","))
// 24-26)

// Find the position of the last occurrence of the letter "a" in a given string.
// console.log("David is saying hello to parents".lastIndexOf("a"))
// Take a sentence as input and get the index of the last space character.
// let userText = prompt("Enter text: ")
// console.log(userText.lastIndexOf(" "))
// Check the last position of a specific word (e.g., "good") in a paragraph string.
// console.log("David is good at math".lastIndexOf("good"))