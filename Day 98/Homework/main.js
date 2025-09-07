// // 2-6)

// // Find the first string in an array that starts with the letter "A".
// const a = ["window","Apple"]
// console.log(a.find(el => el.startsWith("A")))
// // Find the first object in an array of users whose age is over 30.
// const obj = [
//     {name: "David", age: 11},
//     {name: "Lasha", age: 35}
// ]
// console.log(obj.find(el => el.age > 30))
// // Find the first word in an array that has more than 5 characters.
// const words = ["apple","Banana"]
// console.log(words.find(el => el.length > 5))
// // Find the first product in an array of objects where the price is less than 20.
// const obj1 = [
//     {name: "pen",price: 1},
//     {name: "ps5",price: 500}
// ]
// console.log(obj1.find(el => el.price < 20))
// // Find the first student object in an array whose grade is "A".
// const obj2 = [
//     {name: "David",grade:"A"},
//     {name: "Gio",grade:"B"}
// ]
// console.log(obj2.find(el => el.grade === "A"))

// // 7-11)

// // Find the index of the first number in an array that is less than 0.
// const myArr = [1,2,3,4,-1,2,3,-5]
// console.log(myArr.findIndex(el => el < 0))
// // Find the index of the first string in an array that ends with "ing".
// const myArr1 = ["Hello","World","Booking","Cooking"]
// console.log(myArr1.findIndex(el => el.endsWith("ing")))
// // Find the index of the first object in an array of users whose isActive property is true.
// const myArr2 = [
//     {name: "David",isActive: true},
//     {name: "Gio",isActive: false}
// ]
// console.log(myArr2.findIndex(el => el.isActive === true))
// // Find the index of the first element in an array of numbers that is a multiple of 10.
// const nums = [1,2,3,4,5,6,7,8,9,10]
// console.log(nums.findIndex(el => el%10 === 0))
// // Find the index of the first fruit name in an array that has exactly 5 letters.
// const fruits = ["banana","apple"]
// console.log(fruits.findIndex(el => el.length === 5))

// // 12-16)

// // Find the last number in an array that is greater than 100.
// const num = [100,200,300,400,213]
// console.log(num.findLastIndex(el => el > 100))
// // Find the last string in an array that contains the letter "e".
// const strs = ["Hello","How","are","you"]
// console.log(strs.findLastIndex(el => el.includes("e")))
// // Find the last object in an array of users whose age is under 25.
// const myObj = [
//     {name:"David",age:12},
//     {name:"Gio",age: 30}
// ]
// console.log(myObj.findLastIndex(el => el.age < 25))
// // Find the last element in an array of numbers that is odd.
// const arr1 = [1,2,3,4,5,6,7,8,9,10]
// console.log(arr1.findLastIndex(el => el%2 !== 0))
// // Find the last word in an array that starts with a vowel.
// const arr2 = ["apple","banana"]
// console.log(arr2.findLastIndex(el => el.startsWith("a")))

// // 17-21) 

// // Find the index of the last number in an array that is greater than 50.
// const num1 = [100,200,300,400,213]
// console.log(num1.findLastIndex(el => el > 50))
// // Find the index of the last string in an array that starts with "S".
// const arr3 = ["apple","banana","sport"]
// console.log(arr3.findLastIndex(el => el.startsWith("s")))
// // Find the index of the last object in an array of users whose isActive property is true.
// const myObj1 = [
//     {name:"David",isActive:true},
//     {name:"Gio",isActive:false}
// ]
// console.log(myObj1.findLastIndex(el => el.isActive === true))
// // Find the index of the last element in an array of numbers that is divisible by 3.
// const nums = [1,2,3,4,5,6,7,8,9,10]
// console.log(nums.findLastIndex(el => el%3 === 0))
// // Find the index of the last word in an array that has exactly 4 letters.
// const words = ["hello","bowl"]
// console.log(words.findLastIndex(el => el.length === 4))

// // 23-27) 

// // Find the index of the number 25 in an array of numbers.
// const nums = [1,2,3,4,25,6,7,8,9]
// console.log(nums.indexOf(25))
// // Find the index of the string "apple" in an array of fruits.
// const fruits = ["apple","banana"]
// console.log(fruits.indexOf("apple"))
// // Find the index of the first occurrence of "a" in an array of letters.
// const letters = ["a","b","c","d","e"]
// console.log(letters.indexOf("a"))
// // Find the index of the element "cat" in an array of animals.
// const animals = ["dog","cat","bear"]
// console.log(animals.indexOf("cat"))
// // Find the index of the number 100 in an array (where it may not exist).
// const nums = [1,2,3,4,5,6,7,8,9,10]
// console.log(nums.indexOf("100")) // -1

// // 28-32)

// // Find the last index of the number 10 in an array of numbers.
// const num = [1,2,3,4,10,5,6,7,8,10]
// console.log(num.lastIndexOf(10))
// // Find the last index of the string "apple" in an array of fruits.
// const fruits = ["apple","banana"]
// console.log(fruits.lastIndexOf("apple"))
// // Find the last index of the letter "a" in an array of characters.
// const letters = ["a","b","c","d","e","a"]
// console.log(letters.lastIndexOf("a"))
// // Find the last index of "dog" in an array of animals.
// const animals = ["dog","cat","bear"]
// console.log(animals.indexOf("dog"))
// // Find the last index of the number 0 in an array containing positive and negative numbers.
// const nums = [1,2,-3,4,5,-6,7,0,-2,12]
// console.log(nums.lastIndexOf(0))

// // 33-37)

// // Use pop to remove the last number from an array and log the removed value.
// const nums = [1,2,3,4,5,6]
// nums.pop()
// console.log(nums)
// // Use pop to remove the last fruit name from an array of strings.
// const fruits = ["apple","banana"]
// fruits.pop()
// console.log(fruits)
// // Continuously pop elements from an array until it becomes empty.
// const num = [1,2,3]
// num.pop()
// num.pop()
// num.pop()
// console.log(num)
// // Use pop to remove the last object from an array of users.
// const object = [
//     {name:"David",isActive: true},
//     {name:"Gio",isActive:false}
// ]
// object.pop()
// console.log(object)
// // Use pop to remove the last element from an array and store it in another variable.
// const nums = [1,2,3,4,5,6,7,8,9,10]
// const num = nums.pop()
// console.log(nums)
// console.log(num)

// // 38-42)

// // Use splice to remove the first 2 elements from an array.
// const num = [1,2,3,4,5]
// num.splice(0,2)
// console.log(num)
// // Use splice to insert "orange" and "grape" into an array at index 2.
// const num = [1,2,3,4,5]
// num.splice(2,1,"orange","grape")
// console.log(num)
// // Use splice to replace the element at index 3 with "mango".
// const num = [1,2,3,4,5]
// num.splice(3,1,"mango")
// console.log(num)
// // Use splice to remove the last 3 elements of an array.
// const num = [1,2,3,4,5]
// num.splice(2,3)
// console.log(num)
// // Use splice to insert a number into the middle of an array without deleting anything.
// const num = [1,2,4,5]
// num.splice(2,0,3)
// console.log(num)