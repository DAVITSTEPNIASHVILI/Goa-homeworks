// 2-6)

// Select all <p> tags on a webpage and display the total number of them in an alert box.
let ps = document.getElementsByTagName("p")
alert("On the page is " + ps.length + " paragraph")
// Change the text color of all <h2> elements on the page to blue.
let h2s = document.getElementsByTagName("h2")
for (let i=0;i<h2s.length;i++) {
    h2s[i].style.color = "blue"
}
// Retrieve all <li> elements and log the text content of each one to the console.
let lis = document.getElementsByTagName("li")
for (let i=0;i<lis.length;i++){
    console.log(lis[i].textContent)
}
// Select all <div> elements and set their background color to lightgray.
// let divs = document.getElementsByTagName("div")
// for (let i=0;i<divs.length;i++){
//     divs[i].style.backgroundColor = "lightgray"
// }
// Find the first <img> tag on the page and change its src attribute to a different image URL.
let img1 = document.getElementById("img1")
img1.src = "meore.png"
// 7-11)

// Select all elements with the class name highlight and change their background color to yellow.
let className = document.getElementsByClassName("highlight")
for (let i=0;i<className.length;i++) {
    className[i].style.backgroundColor = "yellow"
}
// Count how many elements have the class card and display the number in the console.
let classCard = document.getElementsByClassName("card")
console.log(classCard.length)
// Select all elements with the class error and change their text color to red.
let classError = document.getElementsByClassName("error")
for (let i=0;i<classError.length;i++) {
    classError[i].style.color = "red"
}
// Retrieve all elements with the class item and log the innerHTML of each one to the console.
let classItem = document.getElementsByClassName("item")
for (let i = 0; i < classItem.length; i++) {
    console.log(classItem[i].innerHTML);
}
// Select the first element with the class button and change its text to "Clicked!".
let classButton = document.getElementsByClassName("button")[0]
classButton.textContent = "Clicked!"
// 12)

// Move a <div> element 5 pixels to the right every 100 milliseconds, creating a smooth sliding animation effect.
let div = document.getElementById("div");
div.style.position = "relative";
let count = 0;
let animation = setInterval(function() {
    count += 5;
    div.style.left = count + "px";

    if (count===500) {
        clearInterval(animation)
    }
}, 100);