// Create a new <p> element and add it to the body.
let p = document.createElement("p")
document.body.appendChild(p)
// Create an <h1> element with some text inside it and append it to a <div>.
let h1 = document.createElement("h1")
h1.textContent = "world!"
let div = document.createElement("div")
div.appendChild(h1)
// Create an <img> element, set its src attribute to an image URL, and add it to the page.
let img = document.createElement("img")
img.src = "html.png"
document.body.appendChild(img)
// Create a <button> element with the text "Click me" and add it to the body.
let btn = document.createElement("button")
// Create a <ul> element and add three <li> items to it with different text values.
let ul = document.createElement("ul")
let li1 = document.createElement("li")
li1.textContent = "Hello"
let li2 = document.createElement("li")
li2.textContent = "world"
let li3 = document.createElement("li")
li3.textContent = "qweqw"
ul.appendChild(li1,li2,li3)
// Select a <div> with the id content and use removeChild to remove its first child element.
let div1 = document.getElementById("content")
let p1 = document.getElementById("child")
div1.removeChild(p1)
// Create a <ul> with three <li> items, then use removeChild to remove the last <li> from the <ul>.
let ul1 = document.createElement("ul")
let li4 = document.createElement("li")
let li5 = document.createElement("li")
let li6 = document.createElement("li")
ul1.removeChild(li6)
// Create a new <p> element and use replaceChild to replace an existing <p> inside a <div> with the id textContainer.
let p2 = document.getElementById("p")
let div2 = document.getElementById("textConteiner")
let p3 = document.getElementById("p2")
div2.replaceChild(p2,p3)
// Use replaceChild to swap out a <button> inside a <div> with a new <span> element.
let span = document.getElementById("span")
let div3 = document.getElementById("div")
let btn1 = document.getElementById("btn")
div3.replaceChild(span,btn1)
// Find a <ul> with one <li> and use replaceChild to replace that <li> with a new one.
let ul2 = document.getElementById("ul")
let li7 = document.getElementById("li1")
let li8 = document.getElementById("li2")
ul2.replaceChild(li8,li7)
// Replace an <h2> element with a new <h1> element using replaceChild.
let h2 = document.getElementById("h2")
let h1 = document.getElementById("h1")
body.replaceChild(h1,h2)