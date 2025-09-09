// // 2-6)

// // Take an array of numbers and reverse the order of its elements.
// const nums = [1,2,3,4,5,6,7,8,9,10]
// console.log(nums.reverse())
// // Take an array of fruits and reverse it, then print the first element.
// const fruits = ["Apple","Banana","Mango"]
// console.log(fruits.reverse())
// // Reverse an array of characters to form a word (e.g., ["o","l","l","e","h"] → "hello").
// const word = ["o","l","l","e","h"]
// console.log(word.reverse().join(""))
// // Reverse an array of numbers and find the maximum value.
// const nums = [1,2,3,4,5,6,7,8,9,10]
// console.log(nums.reverse())
// console.log(Math.max(...nums))
// // Reverse an array and join the elements into a string separated by commas.
// const nums = [1,2,3,4,5,6,7,8]
// console.log(nums.reverse().join())
// 7-11)

// // Create an array of fruits and remove the first element using shift(). 
// const fruits = ["Apple","Banana","Mango"]
// fruits.shift()
// // Use shift() to remove the first number in an array of numbers, then print the remaining array.
// const nums = [1,2,3,4,5,6,7,8,9,10]
// nums.shift()
// console.log(nums)
// // Remove the first element from an array and print the element that was removed.
// const fruits = ["Apple","Banana","Mango"]
// console.log(fruits.shift())
// // Use shift() repeatedly until the array becomes empty, printing each removed element.
// const fruits = ["Apple","Banana","Mango"]
// fruits.shift()
// fruits.shift()
// fruits.shift()
// console.log(fruits)
// // Remove the first element from a mixed array (numbers and strings).
// const mix = [1,2,"hello","apple"]
// mix.shift()
// 12-16)

// // Take an array of fruits and join them into a single string separated by commas.
// const fruits = ["Apple","Banana","Mango"]
// console.log(fruits.join())
// // Take an array of numbers and join them with spaces to form a string.
// const nums = [1,2,3,4,5,6,7,8,9,10]
// console.log(nums.join(" "))
// // Join an array of words with "-" as the separator.
// const fruits = ["Apple","Banana","Mango"]
// console.log(fruits.join("-"))
// // Join an array of characters without any separator to form a word.
// const word = ["o","l","l","e","h"]
// console.log(word.join(""))
// // Join an array of names with " | " between each name.
// const names = ["David","Gio","Nino"]
// console.log(names.join(" | "))
// 17-21)

// // Find the absolute value of a positive number.
// console.log(Math.abs(7))
// // Find the absolute value of a negative number.
// console.log(Math.abs(-7))
// // Take an array of numbers and convert each element into its absolute value.
// const nums = [1,2,3,4,5,6,7,8,-9,10]
// console.log(nums.map(num => Math.abs(num)))
// // Subtract two numbers and use Math.abs() to ensure the result is always positive.
// console.log(Math.abs(3-5))
// // Given a number, use Math.abs() to check its distance from zero.
// const num = -5
// const distance = Math.abs(num)
// console.log(`${num} ${distance}`)
// 22-26)

// // Round a positive decimal number up to the nearest integer.
// console.log(Math.ceil(5.8))
// // Round a negative decimal number up to the nearest integer.
// console.log(Math.ceil(-7.2))
// // Take an array of decimal numbers and round each element up using Math.ceil().
// const nums = [1.5,2,3,-4.7,5,-6.2,-7.5,8.1,9,-10]
// console.log(nums.map(el => Math.ceil(el)))
// // Calculate the ceiling of the result of dividing two numbers.
// console.log(Math.ceil(9/4))
// // Use Math.ceil() to round up the result of a price calculation with tax.
// const price = 19.99
// const tax = 0.5
// console.log(`result: ${Math.ceil(price * (1 + tax))}`)
// 27-31)

// // Round a positive decimal number down to the nearest integer.
// console.log(Math.floor(5.8))
// // Round a negative decimal number down to the nearest integer.
// console.log(Math.ceil(-7.2))
// // Take an array of decimal numbers and round each element down using Math.floor().
// const nums = [1.5,2,3,-4.7,5,-6.2,-7.5,8.1,9,-10]
// console.log(nums.map(el => Math.floor(el)))
// // Calculate the floor of the result of dividing two numbers.
// console.log(Math.ceil(9/4))
// // Use Math.floor() to round down a price after applying a discount.
// const price = 49.99
// const discount = 0.5
// console.log(`result: ${Math.floor(price * (1 - discount))}`)
// 32-36)

// // Round a positive decimal number to the nearest integer.
// console.log(Math.round(5.8))
// // Round a negative decimal number to the nearest integer.
// console.log(Math.round(-7.2))
// // Take an array of decimal numbers and round each element to the nearest integer.
// const nums = [1.5,2,3,-4.7,5,-6.2,-7.5,8.1,9,-10]
// console.log(nums.map(el => Math.round(el)))
// // Round the result of dividing two numbers to the nearest integer.
// console.log(Math.round(9/4))
// // Use Math.round() to round a price after adding tax.
// const price = 49.99
// const tax = 0.5
// console.log(`result: ${Math.floor(price * (1 + tax))}`)
// 37-41)

// // Find the largest of two numbers.
// console.log(Math.max(50,56))
// // Find the largest of three numbers.
// console.log(Math.max(50,56,73))
// // Store a few numbers in an array and use manual function to find the maximum.
// const nums = [1,2,3,4,5,10,6,7,8]
// let max = nums[0]
// for (let i = 1; i < nums.length; i++) {
//     if (nums[i] > max) {
//         max = nums[i]
//     }
// }
// console.log(max)
// // Find the largest number in an array of positive numbers.
// console.log(Math.max(1,2,3,4,5,6,7,10,8,9))
// // Find the largest number in an array that contains both positive and negative numbers.
// console.log(Math.max(1,2,-4,-2,342,-43))
// 42-46)

// // Find the smallest of two numbers.
// console.log(Math.min(50,56))
// // Find the smallest of three numbers.
// console.log(Math.min(50,56,73))
// // Store a few numbers in an array and use manual function to find the minimum.
// const nums = [1,2,3,4,5,10,6,7,8]
// let min = nums[0]
// for (let i = 1; i < nums.length; i++) {
//     if (nums[i] < min) {
//         min = nums[i]
//     }
// }
// console.log(min)
// // Find the smallest number in an array of positive numbers.
// console.log(Math.min(1,2,3,4,5,6,7,10,8,9))
// // Find the smallest number in an array that contains both positive and negative numbers.
// console.log(Math.min(1,2,-4,-2,342,-43))
// 47-51)

// // Calculate 2 raised to the power of 3.
// console.log(Math.pow(2,3))
// // Calculate 5 raised to the power of 0.5 (square root).
// console.log(Math.pow(5,0.5))
// // Use Math.pow() to calculate the cube of a number.
// console.log(Math.pow(5,2))
// // Raise a number from a variable to a given exponent.
// const base = 5
// const exponent = 3
// console.log(Math.pow(base,exponent))
// // Create an array of numbers and calculate each number raised to the power of 2.
// const nums = [1,2,3,4,5,6,7,8,9,10]
// console.log(nums.map(el => Math.pow(el,2)))