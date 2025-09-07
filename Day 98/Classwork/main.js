// საკლასო დავალება:

// First, create an array with 10 number.
const nums = [1,2,3,4,5,6,7,8,9,10]
// 1) Find the first number in an array that is greater than 50.
console.log(nums.find(el => el > 50))
// 2) Find the first element in an array of numbers that is divisible by 7.
console.log(nums.find(el => el%7 === 0))

// საკლასო დავალება:

// Replace the second element of an array with a new value using splice.
const numbers = [1,2,3,4,5,6,7,8,9,10]
numbers.splice(1,1,54)
console.log(numbers)

// საკლასო დავალება:

// Use pop to remove the last number from an array and log both the removed value and the updated array.
const num = [1,2,3,4,5,6,7,8,9,10]
console.log(num.pop())
console.log(num)