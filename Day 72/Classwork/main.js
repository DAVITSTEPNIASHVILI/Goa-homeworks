let p = document.getElementById("p")
p.onclick = function() {
    document.body.style.backgroundColor = "black"
    document.body.style.color = "white"
    document.body.style.textAlign = "center"
}
let btn = document.getElementById("btn")
btn.addEventListener("click", function(e) {
    console.log(e)
    e.target.style.backgroundColor = "black"
})