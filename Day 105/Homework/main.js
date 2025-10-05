// 2-6)

// Write a function that logs "Hello after 2 seconds" using setTimeout.
// const timeout = () => {
//     setTimeout(() => {
//         console.log("Hello after 2 seconds")
//     },2000)
// }
// timeout()
// Schedule two messages: one after 1 second and another after 3 seconds.
// const timeout = () => {
//     setTimeout(() => {
//         console.log("Hello after 1 seconds")
//     },1000)
//     setTimeout(() => {
//         console.log("Hello after 3 seconds")
//     },4000)
// }
// timeout()
// // Chain three setTimeout calls so that they log "First", "Second", "Third" in sequence, each 2 seconds apart.
// const timeout = () => {
//     setTimeout(() => {
//         console.log("First")
//     },2000)
//     setTimeout(() => {
//         console.log("Second")
//     },4000)
//     setTimeout(() => {
//         console.log("Third")
//     },6000)
// }
// timeout()
// Create a countdown from 5 to 1, where each number appears every second using setTimeout.
// const timeout = () => {
//     setTimeout(() => {
//         console.log(5)
//     },1000)
//     setTimeout(() => {
//         console.log(4)
//     },2000)
//     setTimeout(() => {
//         console.log(3)
//     },3000)
//     setTimeout(() => {
//         console.log(2)
//     },4000)
//     setTimeout(() => {
//         console.log(1)
//     },5000)
// }
// timeout()
// Write a function that delays execution of another function by a random time between 1–5 seconds.
const logName = () => console.log("David")
const delayFunc = () => {
    const randomNum = Math.ceil(Math.random() * 5)
    setTimeout(logName,randomNum*1000)
}
delayFunc()