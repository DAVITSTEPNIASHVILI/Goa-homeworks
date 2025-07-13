// საკლასო დავალება:

// შექმენით ანონიმური ფუნქცია function keyword-ის გამოყენებით და შეინახეთ ის ცვლადში. ამ ფუნქციამ უბრალოდ უნდა დაბეჭდოს ობიექტის ყველა მნიშნელობა.

// გამოიძახეთ ფუნქცია და დაბეჭდეთ მისი შედეგი.
const myFunc = (function(){
    const obj = {
        name:"David",
        surname:"Stepniashvili"
    }
    for (let item in obj) {
        return obj[item]
    }
})()
console.log(myFunc)

// საკლასო დავალება:

// შექმენით ანონიმური arrow ფუნქცია, რომელსაც არგუმენტად გადაეცემა ერთი მასივი და დააბრუნებს მასივის რიცხვების ნამრავლს. ეს ფუნქცია შექმნის შემდეგ ეგრევე გამოიძახეთ და დაბრუნებული მნიშვნელობა დაბეჭდეთ კონსოლში.

// ეს არის IIFE-ს დავალება
console.log(((arr) => {
    let product = 1
    for (let i of arr) {
        product = product * i
    }
    return product
})([1,2,3]))
// საკლასო დავალება:

// Build an IIFE that takes a string and returns its reversed version.
const reversed = (function(str) {
    let result = ''
    for (let i = str.length - 1; i >= 0; i--) {
        result += str[i]
    }
    return result
})('Hello World')

console.log(reversed) 
