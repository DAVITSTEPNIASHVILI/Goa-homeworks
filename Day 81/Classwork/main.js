// საკლასო დავალება:

// Use a while loop to print numbers from 1 to 20, but skip numbers between 10 and 15 using continue.
let i = 1
while (i <= 20) {
    i++
    if (i > 10 && i < 15) {
        continue
    }
    console.log(i)
}

// საკლასო დავალება:

// Create an arrow function called isEven that takes a number as input and returns true if the number is even, otherwise false.
const isEven = () => {
    let num = Number(prompt("Enter number: "))
    if(num%2 === 0) {
        return true
    } else {
        return false
    }
}
console.log(isEven)

// საკლასო დავალება:

// შექმენით ფუნქცია function keyword-ის გამოყენებით. ამ ფუნქციას გაუწერეთ 10 პარამეტრი. for of ციკლის გამოყენებით გადაუარეთ 10-ვე პარამეტრს. თუ პარამეტრის მნიშვნელობა იქნება რიცხვი, მაშინ დაბეჭდეთ ის. ხოლო თუ სთრინგი იქნება, ეს მნიშვნელობა შეცვალეთ და მასში შეინახეთ რიცხვი 1.

// ფუნქცია გამოიძახეთ ერთხელ და ნახეთ კოდის შედეგი
function myFunc(a, b, c, d, e, f, g, h, i, j) {
    for (let item of arguments) {
        if (typeof item === "number") {
            console.log(item)
        } else if (typeof item === "string") {
            item = 1
            console.log(item)
        }
    }
}

myFunc(1, 2, 3, 4, 5, 6, "qwe", 8, "abc", 10)