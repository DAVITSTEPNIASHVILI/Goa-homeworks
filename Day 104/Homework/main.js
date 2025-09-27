// 2-6) 

// Create an object with at least 5 key-value pairs and use Object.keys() to list all the keys.
// const myObj = {
//     name:"David",
//     surname:"Stepniashvili",
//     age:12,
//     isActive:true,
//     hobies:"riding bike"
// }
// console.log(Object.keys(myObj))
// Count how many keys are in a given object using Object.keys().
// const funcObj = myObj => {
//     return Object.keys(myObj).length
// }
// console.log(funcObj({name:"David",surname:"Stepniashvili"}))
// Write a function that takes an object and returns an array of its keys in uppercase.
// const funcObj = myObj => {
//     return Object.keys(myObj).join().toUpperCase().split()
// }
// console.log(funcObj({name:"David",surname:"Stepniashvili"}))
// Check if a specific key exists in an object by using Object.keys() and array methods.
// const myObj = {
//     name:"David",
//     surname:"Stepniashvili",
//     age:12,
//     isActive:true,
//     hobies:"riding bike"
// }
// console.log(Object.hasOwn(myObj,"name"))
// Create a nested object and extract only the top-level keys using Object.keys().
// const myObj = {
//     name:"David",
//     surname:"Stepniashvili",
//     other:{
//         age:12,
//         isActive:true,
//         hobies:"riding bike"
//     }
// }
// console.log(Object.keys(myObj))
// 7-11)

// Create an object with at least 5 key-value pairs and use Object.values() to list all the values.
// const myObj = {
//     name:"David",
//     surname:"Stepniashvili",
//     age:12,
//     isActive:true,
//     hobies:"riding bike"
// }
// console.log(Object.values(myObj))
// Count how many values are in a given object using Object.values().
// const funcObj = myObj => {
//     return Object.values(myObj).length
// }
// console.log(funcObj({name:"David",surname:"Stepniashvili"}))
// Write a function that takes an object and returns an array of its numeric values only.
// const funcObj = myObj => {
//     return Object.values(myObj).filter(value => typeof value === "number")
// }
// console.log(funcObj({name:"David",surname:"Stepniashvili",age:12}))
// Find the sum of all numeric values in an object using Object.values().
// const funcObj = myObj => {
//     return Object.values(myObj).filter(value => typeof value === "number").reduce((sum,num) => sum + num, 0)
// }
// console.log(funcObj({name:"David",surname:"Stepniashvili",age:12}))
// Check if a certain value exists in an object by using Object.values() and array methods.
// const myObj = (myObj,targetValue) => {
//     return Object.values(myObj).includes(targetValue)
// }
// console.log(myObj({name:"David",surname:"Stepniashvili",age:12},"David"))

// 12-16)

// Create an object with at least 5 key-value pairs and use Object.entries() to list all [key, value] pairs.
// const myObj = {
//     name:"David",
//     surname:"Stepniashvili",
//     age:12,
//     isActive:true,
//     hobies:"riding bike"
// }
// console.log(Object.entries(myObj))
// Write a function that takes an object and prints each key and its value in the format "key: value".
// const myObj = obj => {
//     for (let [key,value] of Object.entries(obj)) {
//         console.log(`${key}: ${value}`)
//     }
// }
// myObj({name:"David",surname:"Stepniashvili",age:12})
// Convert the entries of an object into a new array where each element is a string "key=value".
// const myObj = {
//     name:"David",
//     surname:"Stepniashvili",
//     age:12,
//     isActive:true,
//     hobies:"riding bike"
// }
// for (let [key,value] of Object.entries(myObj)) {
//     console.log(`${key}=${value}`)
// }
// Create a function that filters an object and returns only the entries where the value is greater than 10.
// const myObj = obj => {
//     return Object.entries(obj).filter(([key,value]) => typeof value === "number" && value > 10);
// }
// console.log(myObj({name:"David",surname:"Stepniashvili",age:12}))
// Write a function that swaps keys and values of an object using Object.entries().
// const myObj = {
//     name:"David",
//     surname:"Stepniashvili",
//     age:12,
//     isActive:true,
//     hobies:"riding bike"
// }
// for (let [key,value] of Object.entries(myObj)) {
//     console.log(`${key}: ${value}`)
// }
// 17-21)

// Make an object with 3 properties and check if one of them exists.
// const myObj = {
//     name:"David",
//     surname:"Stepniashvili",
//     age:12
// }
// console.log(Object.hasOwn(myObj,"age"))
// Check if a property that does not exist is owned by the object.
// const myObj = {
//     name:"David",
//     surname:"Stepniashvili",
//     age:12
// }
// console.log(Object.hasOwn(myObj,"hobies"))
// Create an object and test if "toString" is its own property.
// const myObj = {
//     name: "David"
// }
// console.log(Object.hasOwn(myObj,"toString"))
// Add a new property to an object and check it with Object.hasOwn().
// const myObj = {
//     name: "David",
//     toString: 5
// }
// console.log(Object.hasOwn(myObj,"toString"))
// Delete a property from an object and confirm it no longer exists.
// const myObj = {
//     name: "David"
// }
// console.log(Object.hasOwn(myObj,"toString"))