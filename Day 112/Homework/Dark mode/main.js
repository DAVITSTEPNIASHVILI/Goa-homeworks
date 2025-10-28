// 3)

// Save and Retrieve User Preferences:
// Create a system that stores a user’s preferred theme (light or dark) in localStorage and automatically applies it when the page loads.
const btn = document.getElementById("btn")
const conteiner = document.getElementById("conteiner")

btn.addEventListener("click", () => {
    if (btn.textContent === "Dark mode") {
        conteiner.style.backgroundColor = "black"
        conteiner.style.color = "white"
        btn.style.backgroundColor = "white"
        btn.style.color = "black"
        btn.textContent = "White mode"
        localStorage.setItem("theme", "dark")
    } else if (btn.textContent === "White mode") {
        conteiner.style.backgroundColor = "white"
        conteiner.style.color = "black"
        btn.style.backgroundColor = "black"
        btn.style.color = "white"
        btn.textContent = "Dark mode"
        localStorage.setItem("theme", "light")
    }
})

const savedTheme = localStorage.getItem("theme")
if (savedTheme === "dark") {
    conteiner.style.backgroundColor = "black"
    conteiner.style.color = "white"
    btn.style.backgroundColor = "white"
    btn.style.color = "black"
    btn.textContent = "White mode"
} else if (savedTheme === "light") {
    conteiner.style.backgroundColor = "white"
    conteiner.style.color = "black"
    btn.style.backgroundColor = "black"
    btn.style.color = "white"
    btn.textContent = "Dark mode"
}