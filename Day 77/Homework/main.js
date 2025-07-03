// ჯავა სკრიპტით შექმენით ერთი დივი და ერთი ღილაკი,ღილაკზე დაჭერის დროს,დივს შეუცვალეთ ფერი და მიეცით ზომები ყოველ 3 წამში შეიქმნას p თეგი სადაც დაწერილი იქნება ასე:p1,p2,p3 და ა.შ.div ის ზომა კი ნელ-ნელა შევამციროთ,საბოლოოდ კი გავაქროთ

// გამოიყენეთ:createelement,createTextNode,for loop,setInterval
let body = document.body
let btn = document.createElement("button")
let div = document.createElement("div")
btn.textContent = "start"
body.appendChild(btn)
body.appendChild(div)
div.style.width = '300px'
div.style.height = '300px'
div.style.backgroundColor = 'red'
div.style.transition = 'all 1s ease'
div.style.marginTop = '10px'
let count = 1
let size = 300
btn.addEventListener('click', function () {
    let interval = setInterval(function () {
        let p = document.createElement("p")
        p.textContent = "p" + count
        div.appendChild(p)
        count++

        size -= 30
        div.style.width = size + "px"
        div.style.height = size + "px"

        if (count === 2) {
            div.style.backgroundColor = "blue"
        } else if (count === 5) {
            div.style.backgroundColor = "purple"
        }

        if (count === 10) {
            clearInterval(interval)
            div.style.width = "0px"
            div.style.height = "0px"
        }
    },3000)
})

// 2-11)
// :brain: Basic DOM Selection & Manipulation
// Count <p> Tags
// Select all <p> tags on the page.
// Show the number of them in an alert.
let p = document.getElementsByTagName("p").length
alert(p)
// Change All <h2> Text Colors to Blue
// Use querySelectorAll and a loop.
// Set style.color = "blue".
let h2 = document.getElementsByTagName("h2")
for (let i=0;i<h2.length;i++) {
    h2[i].style.color = "blue"
}
// Log All <li> Texts
// Get all <li> elements.
// Log their textContent using a loop.
let li = document.getElementsByTagName("li")
for (let i=0;i<li.length;i++) {
    console.log(li[i].textContent)
}
// Change All <div> Backgrounds
// Select all <div> elements.
// Set backgroundColor = "lightgray".
let divs = document.getElementsByClassName("div")
for (let i = 0; i < divs.length; i++) {
    divs[i].style.backgroundColor = "lightgray"
}
// Change First <img> Source
// Find the first <img> using querySelector.
// Change its src to another valid image URL.

// :yellow_circle: Class-based Selections
// Highlight Elements
// Select all elements with class highlight.
// Change their background to yellow.
let classHigthligth = document.getElementsByClassName("higthligth")
for (let i = 0; i < classHigthligth.length; i++) {
    classHigthligth[i].style.backgroundColor = "lightgray"
}
// Count .card Elements
// Select all elements with the class card.
// Log the count using .length.
let classCard = document.getElementsByClassName("card").length
console.log(classCard)
// Make .error Text Red
// Find all .error elements.
// Change style.color = "red".
let classError = document.getElementsByClassName("error")
for (let i = 0; i < classError.length; i++) {
    classError[i].style.color = "red"
}
// Log .item innerHTML
// Select all elements with class item.
// Use console.log(element.innerHTML) for each.
let classItems = document.getElementsByClassName("item")
for (let i = 0; i < classItems.length; i++) {
    console.log(classItems[i].innerHTML)
}
// Change First .button Text
// Find the first element with class button.
// Change its text to "Clicked!".
let btn = document.getElementsByClassName("button")[0]
btn.textContent = "Clicked!"