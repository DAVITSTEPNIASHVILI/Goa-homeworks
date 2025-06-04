function logicalFunc(bul1,bul2) {
    console.log(bul1 || bul2)
    console.log(bul1 && bul2)
}
logicalFunc(true,false)
logicalFunc(false,false)
logicalFunc(true,true)

function typeConvert() {
    let num1 = prompt("Enter number: ")
    console.log(num1)
    num1 = Number(num1)
    console.log(num1, typeof num1)
}
typeConvert() 


function forConditions(){
    let userNum = Number(prompt("Enter number:"));

    if (userNum < 18) {
        console.log("0-18 - not adult");
    } else if (userNum < 65) {
        console.log("18-65 - adult & not old");
    } else if (userNum < 113){
        console.log("65-113 - retired")
    } else {
        console.log("113+ - lie")
    }
}