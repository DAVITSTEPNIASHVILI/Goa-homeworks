//  1) Create three variables: name, age, and city. Assign them your name, age, and city, then log them in the console. 
let myName = "David"
let age = 12
let city = "Tbilisi"
myName = "Daviti"
age = 11
city = "Qutaisi"
console.log(myName,age,city)
//  2) Create a variable score and set it to 10. Reassign it to 15, then print both values using console.log. 
let score = 10
score = 15
console.log(score)
//  3) Create an HTML file with a <p> tag with id="output". In JavaScript, create a variable message = "Welcome!" and use getElementById to display it in the paragraph
message = "Welcome!"
let p = document.getElementById("output")
p.textContent = message
//  4) Create a button that changes the text inside a <div id="greeting">Hello!</div> to Hi there! when clicked.
function changeDiv() {
    let div = document.getElementById("greeting")
    div.textContent = "Hi there!"
}
//  5) Make a button that changes the color of text inside a <h1 id="title">Hello World</h1> to red when clicked.
function changeColor() {
    let h1 = document.getElementById("title")
    h1.style.color = "red"
}
//  6) Make a counter that starts at 0 and increases by 1 each time a button is clicked. Use a variable and update both the variable and the DOM.
let count = 0;
function increment() {
    count = count + 1;
    document.getElementById("counter").textContent = count;
}
//  7) Create a paragraph with id="status" that says "Offline" in gray. When a button is clicked, change the text to "Online" and the color to green.
let p1 = document.getElementById("status")
p1.style.color = "grey"
function changetext() {
    p1.textContent = "Online"
    p1.style.color = "green"
}