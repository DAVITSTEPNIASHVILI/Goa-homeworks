// 4)

// Visit Counter:
// Implement a counter that tracks how many times a user has visited the page, updating and displaying the count each time they return.
const counterEl = document.getElementById("counter")
let visits = localStorage.getItem("visits")

if (!visits) {
    visits = 0
} else {
    visits = Number(visits)
}
visits++
localStorage.setItem("visits", visits)
counterEl.textContent = `You have visited this page ${visits} ${visits === 1 ? 'time' : 'times'}`