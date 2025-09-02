// // 2-6)

// // Given an array of numbers, use some to check if there are any negative numbers.
// const numbers = [1,2,3,4,-5,-6,7,8,9,10]
// console.log(numbers.some(el => el < 0))
// // Use some to check if at least one string in an array is longer than 10 characters.
// const strings = ["Hello my name is david","My name is david","David"]
// console.log(strings.some(el => el.length > 10))
// // Given an array of ages, use some to verify if there’s at least one person under 18.
// const ages = [11,12,15,18,20]
// console.log(ages.some(el => el > 18))
// // Use some to determine if any number in an array is divisible by 5.
// const nums = [1,2,3,4,5,6,7,8,9,10]
// console.log(nums.some(el => el%5 === 0))
// // Given an array of objects with a property isActive, use some to check if at least one object is active.
// const users = [
//     { name: "Dato", isActive: false },
//     { name: "Gio", isActive: false },
//     { name: "Taso", isActive: true }
// ]
// console.log(users.some(el => el.isActive))
// // 7-11)

// // Use forEach to print every element of an array of numbers.
// numbers.forEach(el => {console.log(el)})
// // Given an array of strings, use forEach to print each string in uppercase.
// const strings = ["Hello my name is david","My name is david","David"]
// strings.forEach(el => {console.log(el.toUpperCase())})
// // Use forEach to calculate the sum of all numbers in an array.
// const nums = [1,2,3,4,5,6,7,8,9,10]
// let sum = 0
// nums.forEach(el => {sum += el})
// console.log(sum)
// // Given an array of names, use forEach to print a greeting message for each name.
// const names = ["Dato","Gio","Nino","Taso"]
// names.forEach(el => {
//     console.log(`Hello, ${el}!`)
// })
// // Use forEach to count how many odd numbers are in an array.
// const numbers = [1,2,3,4,5,6,7,8,9,10]
// let count = 0
// numbers.forEach(el => {
//     if (el%2 !== 0) {
//         count++
//     }
//     return count
// })
// console.log(count)
// 12-16)

// // Given an array of numbers, use map to return their cubes.
// const numbers = [1,2,3,4,5,6,7,8,9,10]
// console.log(numbers.map(el => el**2))
// Given an array of words, use map to return each word reversed.
// const words = ["hello","David","house","bridge","bed"]

// // Use map to turn an array of temperatures in Celsius into Fahrenheit.
// const celsius = [0, 20, 30, 40];
// console.log(celsius.map(c => (c * 9/5) + 32))
// // Given an array of numbers, use map to convert them into strings with "Value: " prefixed.
// const numbers = [1,2,3,4,5,6,7,8,9,10]
// console.log(numbers.map(el => {
//     console.log(`Value ${el}`)
// }))
// // Take an array of objects with firstName and lastName and use map to return full names.
// const names = [
//     { name: "Dato", lastName: "Stepniashvili"},
//     { name: "Gio", lastName: "fkdhfwep"},
//     { name: "Taso", lastName: "fkdhfwep"}
// ]
// console.log(names.map(el => `${el.name} ${el.lastName}`))