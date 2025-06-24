// Create a counter that logs numbers from 1 to 5 to the console every second, then stops.
let count = 1
let counter = setInterval(function(){
    console.log(count)
    count++

    if (count===5) {
        clearInterval(counter)
    }
},1000)
// Make a message display in the console every 2 seconds, and stop it after 10 seconds.
let count1 = 0
let counter1 = setInterval(function(){
    console.log("David")
    count1++

    if (count1===5) {
        clearInterval(counter1)
    }
},2000)
// Change the background color of a web page every 3 seconds, and stop changing after 5 changes.
let count2 = 0
const colors = ["lightblue", "lightgreen", "lightpink", "lightyellow", "lavender"];
let counter2 = setInterval(function(){
    document.body.style.backgroundColor = colors[count2]
    count2++

    if (count2===5) {
        clearInterval(counter2)
    }
},3000)
// Display the current time in the console every second, and stop after 15 seconds.
let counter3 = setInterval(function(){
    let d = new Date()
    console.log(d)

    if (count2===15) {
        clearInterval(counter3)
    }
},1000)
// Create a simple timer that counts up in seconds and stops when it reaches 10 seconds.
let counter4 = setInterval(function(){
    console.log(count2)
    count2++

    if (count2===10) {
        clearInterval(counter4)
    }
},1000)
// Create an array of 4 numbers and log the value of the second element.
const nums = [1,2,3,4]
console.log(nums[1])
// Change the value of the first element in an array to 100 and log the entire array.
let mix = [20,true,"false","hello"]
mix[0] = 100
console.log(mix)
// Create an array of 3 strings and log each one using individual console.log() statements with direct indexing.
const strs = ["Hello","I'm","David"]
console.log(strs[0])
console.log(strs[1])
console.log(strs[2])
// Create an array of 5 numbers and find the sum of the first and last elements using indexing.
const numbers = [1,2,3,4,5]
console.log(numbers[0] + numbers[4])