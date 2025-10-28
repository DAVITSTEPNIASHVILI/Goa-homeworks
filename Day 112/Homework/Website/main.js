const inputs = document.querySelectorAll("#inputs input")
const btn = document.getElementsByTagName("button")[0]

const h21 = document.getElementById("h2-1")
const h22 = document.getElementById("h2-2")
const h23 = document.getElementById("h2-3")
const h24 = document.getElementById("h2-4")

h21.textContent = `Name: ${localStorage.getItem("h2-1")}`
h22.textContent = `Facebook Link: ${localStorage.getItem("h2-2")}`
h23.textContent = `Email: ${localStorage.getItem("h2-3")}`
h24.textContent = `Password: ${localStorage.getItem("h2-4")}`

btn.addEventListener("click", e => {
    e.preventDefault()

    localStorage.setItem("h2-1", inputs[0].value)
    localStorage.setItem("h2-2", inputs[1].value)
    localStorage.setItem("h2-3", inputs[2].value)
    localStorage.setItem("h2-4", inputs[3].value)

    h21.textContent = `Name: ${localStorage.getItem("h2-1")}`
    h22.textContent = `Facebook Link: ${localStorage.getItem("h2-2")}`
    h23.textContent = `Email: ${localStorage.getItem("h2-3")}`
    h24.textContent = `Password: ${localStorage.getItem("h2-4")}`
})