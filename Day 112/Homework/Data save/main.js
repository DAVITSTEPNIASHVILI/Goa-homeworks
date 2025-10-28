// 5)

// Form Data Autosave:
// Make a form that automatically saves its input values to localStorage as the user types, and restores them when the page is reopened.
const form = document.getElementById("myForm")
const inputs = form.querySelectorAll("input, textarea")

inputs.forEach(input => {
    input.value = localStorage.getItem(input.id) || ""
    input.addEventListener("input", () => {
        localStorage.setItem(input.id, input.value)
    })
})