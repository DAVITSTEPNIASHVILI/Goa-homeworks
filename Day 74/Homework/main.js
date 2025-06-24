// 1. Change Text with a Button
// Use addEventListener to change the text of a paragraph when a button is clicked.

// Hint:

// js
// Copy
// Edit
// button.addEventListener('click', function () {
//   paragraph.textContent = "New text!";
// });

// let btn = document.getElementById("btn")
// let p = document.getElementById("p")
// btn.addEventListener('click',function(){
//     p.textContent = "New text!"
// })

// 2. Change Background Color Every 2 Seconds
// Use setInterval to randomly change the background color of the page every 2 seconds.

// Hint: Use Math.random() and hex color strings.
// let count = 0
// const colors = ['red','yellow','green','purple','pink']
// let interval = setInterval(function(){
//     document.body.style.backgroundColor = colors[count]
//     count++
//     if (count===5) {
//         clearInterval(interval)
//     }
// },2000)
// 3. Add Names to a List
// Create an input and a button.

// When the button is clicked, add the input value as a new <li> item to a <ul>.

// You must use:

// createElement

// appendChild

// addEventListener

// let btn1 = document.getElementById("btn1")
// let inp = document.getElementById("inp")
// let ul = document.getElementById("ul")
// btn1.addEventListener('click',function(){
//     let li = document.createElement("li")
//     li.textContent = inp.value
//     ul.appendChild(li)
//     inp.value = ""
// })

// ⚙️ Intermediate Level
// 4. Digital Clock
// Create a digital clock that updates every second using setInterval.

// Output Example: 14:22:05
// setInterval(function(){
//     let date = new Date
//     console.log(date)
// },1000)

// 5. Array of Colors
// Create a button and a color array.
// When the button is clicked, cycle through the colors (from the array) and apply them to the background.

// No forEach allowed!
// let btn2 = document.getElementById("btn2")
// let counts = 0
// const color = ['red','yellow','green','purple','pink']
// btn2.addEventListener('click',function(){
//     document.body.style.backgroundColor = color[count]
//     count++

//     if (count>=color.lenght) {
//         count = 0
//     }
// })
// 6. Dynamic Box Creator
// User types a number in input (e.g., 5), and clicks a button.

// You create that many <div> boxes with random colors and append them to a container.
let container = document.getElementById("container");

let btn3 = document.createElement("button");
btn3.textContent = "Create Boxes";
container.appendChild(btn3);

function getRandomColor() {
    return "#" + Math.floor(Math.random() * 16777215).toString(16);
}

btn3.addEventListener("click", function () {
  let userNumber = Number(prompt("Enter number of boxes:"));

  for (let i = 0; i < userNumber; i++) {
      let div = document.createElement("div");
      div.className = "box";
      div.style.backgroundColor = getRandomColor();
      container.appendChild(div);
    }
  })
// // 7. Countdown Timer
// // Create an input for sconds and a "Start Timer" button.
// let inp1 = document.createElement("input")
// inp1.textContent = 60
// document.body.appendChild(inp1)
// let btn4 = document.createElement("button")
// btn4.textContent = "Start Timer"
// document.body.appendChild(btn4)
// // When clicked, start counting down using setInterval.
// btn4.addEventListener('click',function(){
//     let interval3 = setInterval(function(){
//         inp1=inp1-1

//         if (inp1===0) {
//         clearInterval(interval3)
//         btn4.textContent = "Time's up!"
//         }
//     },1000)
// })
// Show the countdown on the page. When it reaches 0, show "Time's up!".

// 🧠 Advanced Level
// 8. To-Do List App
// Add tasks via an input and button.

// Show them in a list.

// Each task has a "Delete" button to remove it.

// Use:

// createElement

// appendChild

// addEventListener

// Array for storing tasks.

// 9. Typing Speed Test
// Show a random sentence from an array.
// When user clicks “Start”, a timer starts and user types the sentence.

// When done, stop timer and show:

// Time taken

// Words per minute (WPM)
// let count = 0
// let start = document.getElementById("start")
// let stop = document.getElementById("stop")
// let inp = document.getElementById("inp")
// start.addEventListener('click',function(){
//     let startInterval = setInterval(function(){
//         console.log(inp.value)
//         count++
//         console.log(count)
//         stop.addEventListener('click',function(){
//             clearInterval(startInterval)
//         })
//     },1000)
// })

// 10. Image Slider
// Have an array of image URLs.
// Show one image at a time.
// Add Next and Previous buttons.
// Also auto-slide every 3 seconds using setInterval.

// const images = ["pirveli.png","meore.png","mesame.png"]
// let next = document.getElementById("next")
// let previous = document.getElementById("previous")
// let img = document.getElementById("img")
// let count = 0
// next.addEventListener("click",function(){
//     count+=1
//     if(count>=images.length) {
//         count = 0
//     }
//     img.src = images[count]
// })
// previous.addEventListener('click',function(){
//     count-=1
//     if(count<0) {
//         count = images.length-1
//     }
//     img.src = images[count]
// })
