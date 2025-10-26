// საკლასო დავალება:

// Create a function that takes an array of 5 numbers and logs each number.

// Use the ternary operator to decide whether to add 10 to each number or subtract 10, and return the new array using the spread syntax.
const myFunc = (num1,num2,num3,num4,num5) => {
    const whether = [num1,num2,num3,num4,num5]
    const newArray = whether.map(el => el > 10 ? el - 10 : el + 10)
    console.log([...newArray])
}
myFunc(10,20,3,40,5)

