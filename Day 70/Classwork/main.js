function color() {
    let color = prompt("Enter color: ")
    let btn = document.getElementById("btn")
    btn.style.backgroundColor = color
}

function inp () {
    let inpValue = document.getElementById("inp").value
    if (inpValue === "true") {
        alert("logged in")
    } else {
        alert("try again")
    }
}

function colors() {
    let inp1 = document.getElementById("inp1")
    let inp2 = document.getElementById("inp2")
    document.body.style.color = inp1.value
    document.body.style.backgroundColor = inp2.value
}