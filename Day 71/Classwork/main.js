function generateParagraph() {
    let div = document.getElementById("div")
    let p = document.createElement("p")
    p.textContent = "Hello world!"
    div.appendChild(p)
}
generateParagraph()

function removeChildElement() {
    let mainDiv = document.getElementById("main-div")
    let childP = document.getElementById("child-p")
    mainDiv.removeChild(childP)
}

function addingText() {
    let parent = document.getElementById("parent")
    let child = document.getElementById("child")
    let myP = document.createElement("p")
    myP.textContent = "hello world!"
    parent.replaceChild(myP,child)
}
addingText()