// 3-7)

// Write a function that checks if a given string starts with "Hello" and returns true or false.
const myFunc1 = (string => {
    return string.startsWith("Hello")
})
console.log(myFunc1("Hello my name is David!"))
console.log(myFunc1("My name is David!"))
// Create a function that checks if a filename starts with "img_" and returns "Image file" or "Not an image file".
const myFunc2 = (fileName => {
    if (fileName.startsWith("img_")) {
        return "Image file"
    } else {
        return "Not an image file"
    }
})
console.log(myFunc2("img_123.png"))
console.log(myFunc2("photo_123.png")) 
// Given a sentence, check if it starts with "Once upon"
const myFunc3 = (story => {
    return story.startsWith("Once upon")
})
console.log(myFunc3("Once upon a time"))
// Write a function that checks if a string starts with a specific substring at a given position.
const myFunc4 = ((str,substring,position) => {
    return str.startsWith(substring, position);
})
console.log(myFunc4("Hello world","Hello",0))
console.log(myFunc4("Hello world","ello",2))
// Create a function that counts how many names in an array start with "Dr.".
const myFunc5 = (names => {
    let count = 0
    for (let char of names) {
        if (char.startsWith("Dr.")){
            count ++
        }
    }
    return count
})
console.log(myFunc5(["Dr.James","Ms.James","Dr.Homles"]))
// 8-12)

// Write a function that removes extra spaces at the beginning and end of a string using trim().
const myFunc6 = (string => {
    return string.trim()
})
console.log(myFunc6("      hello world           "))
// Given a string with leading spaces, use trimStart() to clean it and return the result.
const myFunc7 = (string => {
    return string.trimStart()
})
console.log(myFunc7("       hello world    "))
// Take a string with trailing spaces, clean it using trimEnd(), and return the result.
const myFunc8 = (string => {
    return string.trimEnd()
})
console.log(myFunc8("hello world    "))
// Write a function that takes a list of usernames (with random spaces around them) and returns clean usernames without leading or trailing spaces.
const myFunc9 = (string => {
    let res = []
    for (let char of string) {
        res.push(char.trim())
    }
    return res
})
console.log(myFunc9(["  David ","    Nick "]))
// Check whether a user input string is empty after trimming (i.e., contains only spaces).
const myFunc10 = (string => {
    return string.trim() === ""
})
console.log(myFunc10("     "))
console.log(myFunc10("  hello "))

// 13-17)

// Create an empty array and use push() to add five numbers into it.
const empty = []
empty.push("Hello","world")
console.log(empty)
// Start with an array of fruits and use push() to add two more fruits at once.
const fruits = ["apple"]
fruits.push("mango","banana")
console.log(fruits)
// Write a function that pushes user input strings into an array until the word "stop" is entered.
// const Func = () => {
//     let inputs = [];
//     let input = prompt("Enter something:"); // first input

//     while (input !== "stop") {
//         inputs.push(input.trim())
//         input = prompt("Enter something:")
//     }

//     return inputs;
// };
// console.log(Func());

// Given an array of numbers, use push() to add the sum of the array as the last element.
const nums = (numbers) => {
    let sum = 0
    for (let num of numbers) {
        sum += num
    }
    numbers.push(sum)
    return numbers
}
console.log(nums([1,2,3,4,5,6]))
// Start with an empty array and push the first 10 even numbers into it.
const emptyArr = () => {
    let evenNums = []
    evenNums.push(2,4,6,8,10,12,14,16,18,20)
    return evenNums
}
console.log(emptyArr())