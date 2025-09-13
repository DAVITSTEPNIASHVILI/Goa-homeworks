// 2-6)

// Generate a random decimal
// // Write a function that returns a random decimal between 0 and 1.
// console.log(Math.random())
// // Write a function rollDice() that returns a number from 1 to 6.
// const rollDice = (nums => {
//     for (let i = 0;i<nums.length;i++) {
//         return nums[Math.floor(Math.random() * nums.length)]
//     }
// })
// console.log(rollDice([1,2,3,4,5,6]))
// // Simulate flipping a coin and return "Heads" or "Tails".
// const coin = (randomSide => {
//     for (let i = 0;i<randomSide.length;i++) {
//         return randomSide[Math.floor(Math.random() * randomSide.length)]
//     }
// })
// console.log(coin(["Heads","Tails"]))
// // Create a function that generates a random 8-character password using letters and numbers.
// const randomPassword = () => {
//     const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"
//     let password = ""
//     for (let i = 0;i<8;i++) {
//         password += chars[Math.floor(Math.random() * chars.length)]
//     }
//     return password
// }
// console.log(randomPassword())
// // Generate true or false randomly using Math.random().
// const randomBool = [false,true]
// console.log(randomBool[Math.floor(Math.random() * randomBool.length)])

// 7-11)

// // Use Math.trunc() to remove the decimal part of 12.987.
// console.log(Math.trunc(12.987))
// // Apply Math.trunc() to -45.67 and see the result. Compare it with Math.floor().
// console.log(Math.trunc(-45.67))
// console.log(Math.floor(-45.67))
// // Generate a random number between 0 and 100 with decimals, then truncate it.
// for (let i = 0;i<100;i++) {
//     console.log(Math.trunc(Math.random() * 100))
// }
// // Given a string like "34.89", convert it to a number and truncate it.
// console.log(Math.trunc("34.89"))
// // Given an array [3.14, 7.9, -2.5, 0.99], create a new array with all values truncated.
// const nums = [3.14, 7.9, -2.5, 0.99]
// console.log(nums.map(el => (Math.trunc(el))))

// 12 - Big project)

// 🎲 Random Quote Generator Website
// 🔹 Features

// Displays a random quote each time the user clicks a button.

// Uses Math.random() to pick a random quote from an array.

// Optionally: change background colors randomly when showing a new quote.
let p = document.getElementById("p")
let btn = document.getElementById("btn")
const quotes = [
    "ცხოვრება ის არის, რაც ხდება მაშინ, როცა შენ სხვა გეგმებს ადგენ.",
    "სწავლის პროცესი არასოდეს მთავრდება.",
    "ვინც რისკავს, ის იგებს.",
    "მოძრაობა წინ — პროგრესის საიდუმლოა.",
    "წარმატება იწყება პირველი ნაბიჯით.",
    "დრო — ყველაზე ძვირფასი რესურსია.",
]
const colors = ["yellow","blue","brown","purple","pink"]
btn.addEventListener("click",() => {
    document.body.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)]
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)]
    p.textContent = randomQuote
})