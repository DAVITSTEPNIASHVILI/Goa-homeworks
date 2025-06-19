// Click Alert
// Add an event listener to a button so that when it's clicked, an alert box displays a message.
let btn = document.getElementById("btn")
btn.addEventListener("click", function() {alert("Hello")})
// Change Text on Hover
// Add an event listener to a paragraph so that when the mouse hovers over it, the text changes to something else.
let p =document.getElementById("p")
p.addEventListener("mouseover", function() {p.textContent = "World!"})
// Toggle Background Color
// Add an event listener to a div so that when it's clicked, its background color toggles between two colors.
let div = document.getElementById("div")
div.addEventListener("click", function() {div.style.backgroundColor = "greenyellow"})
// Log Input Value on click
// Add an event listener to a text input so that every time an input is clicked, the current value of the input is logged to the console.
let inp = document.getElementById("inp")
inp.addEventListener("click", function() {console.log(inp.value)})
// Show/Hide Image on Button Click
// Add an event listener to a button so that when it’s clicked, it shows or hides an image on the page.
let btn1 = document.getElementById("btn1")
let img = document.getElementById("img")
btn1.addEventListener("click", function() {
    if (img.style.display === "none") {
        img.style.display = "block"
    } else {
        img.style.display = "none"
    }
})