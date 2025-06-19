let count = 0
let myIterval = setInterval(function() {
    console.log("David Stepniashvili")
    count = count + 1  

    if (count===4) {
        clearInterval(myIterval)
    }
}, 5000)

const mix = ["david",10,true,{age: 10, country: "Georgia"}]
console.log(mix)
console.log(mix[2])

function logAllElements(arr) {
    for (let i = 0; i<arr.lentgh;i++) {
        console.log(arr[i])
    }
}
logAllElements(["David","Data"])