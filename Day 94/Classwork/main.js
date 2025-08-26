// საკლასო დავალება:

// Given an array of 10 words, filter out only those that start with the letter "a".
const words = ["Apple","Arrow","Anchor","Bright","Silent","Dream","Azure","Flame","Horizon","Echo"]
const res = []
for (let item of words) {
    if (item.startsWith("A") === false) {
        res.push(item)
    }
}
console.log(res)

// საკლასო დავალება:

// Ask the user for their first name with extra spaces only at the beginning. Use trimStart() to clean it and display the result.
let input = prompt("Enter your first name with many spaces in start: ")
console.log(input.trimStart())
// Ask the user for their last name with extra spaces only at the end. Use trimEnd() to clean it and display the result.
let input1 = prompt("Enter your first name with many spaces in end: ")
console.log(input1.trimEnd())