// 2-6)

// Use repeat to print the string "Hello" 3 times.
console.log("Hello".repeat(3))
// Create a string "*" and use repeat to generate a line of 20 stars.
console.log("*".repeat(20))
// Take a string "abc" and use repeat to build "abcabcabcabc".
console.log("abc".repeat(4))
// Make a function that takes a word and a number, then returns the word repeated that many times.
const myFunc = ((word,num) => {
    const mix = word + num
    return mix.repeat(5)
})
console.log(myFunc("hello",5))
// Use repeat to simulate a simple loading bar (e.g., "█".repeat(10)).
console.log("█".repeat(10))
// 7-11)

// Replace the first occurrence of "cat" with "dog" in the string "The cat chased another cat.".
console.log("The cat chased another cat.".replace("cat","dog"))
// Replace the first "a" in the word "banana" with "o".
console.log("Banana".replace("a","o"))
// Replace the first space in "Hello World from JS" with "-".
console.log("Hello World from JS".replace(" ","_"))
// Replace the first digit in "12345abc678" with "#".
console.log("12345abc678".replace("1","#"))
// Replace the first "day" in "Monday is a good day" with "night".
console.log("Monday is a good day".replace("day","night"))

// 12-16)

// Replace all spaces in "Hello World from JS" with underscores (_).
console.log("Hello World from JS".replaceAll(" ","(_)"))
// Replace all occurrences of "cat" with "dog" in "cat and cat are friends".
console.log("cat and cat are friends".replaceAll("cat","dog"))
// Replace every digit in "My number is 12345" with "#".
console.log("My number is 12345".replaceAll("12345","#"))
// Replace all vowels in "Javascript is fun" with "*".
let str = "Javascript is fun";
let result = ""
for (let char in str) {
    if (char === "a" || char === "e" || char === "i" || char === "o" || char === "u"){
        result += "*"
    } else {
        result += char
    }
}
console.log(result)
// Replace all "." in "www.example.com" with "-".
console.log("www.example.com".replaceAll(".","_"))

// 17-21)

// Create an array of numbers from 1 to 10. Use slice to get the first 4 elements.
const numbers = [1,2,3,4,5,6,7,8,9,10]
console.log(numbers.slice(0,4))
// Make an array of fruits. Use slice to get the last 2 fruits from the array.
const fruits = ["apple","banana","mango"]
console.log(fruits.slice(1,3))
// Take an array of city names. Use slice to get only the 3rd to the 2nd-to-last elements.
const cityNames = ["Tblisi","New York","Batumi"]
console.log(cityNames.slice(1,-1))
// From an array of student names, use slice to extract the last 5 student
const names = ["David","Luka","Mate","Anastasia","Petre","Aleqs"]
console.log(names.slice(1,6))
// From an array of letters ['a','b','c','d','e','f'], use slice to copy the middle part (from 'c' to 'e').
const letters = ['a','b','c','d','e','f']
console.log(letters.slice(2,5))

// 22-26)

// Split the string "2025-08-17" into an array of year, month, and day.
const date = "2025-08-17"
console.log(date.split("-"))
// Split "one two three four five" into an array of words.
const nums = "one two three four five"
console.log(nums.split(" "))
// Split the string "John,Doe,25,Developer" into an array of values.
const string = "John,Doe,25,Developer"
console.log(string.split(","))
// Split the string "abc" into an array of single characters.
const abc = "abc"
console.log(abc.split(""))
// Split "JavaScript is fun" into an array of words and access the second word.
const Javascript = "Javascript is fun"
console.log(Javascript.split(" "))