// საკლასო დავალება:

// შექმენით ფუნქცია რომელიც:
//     1. ხუთ ელემენტიანი სთრინგების მასივიდან ირჩევს random სთრინგს.
//     2. 3 წამის შემდეგ ბეჭდავს ამ სთრინგს.
const strs = ["David","Stepniashvili","Teacher","Student","12"]
function printRandomString() {
    const randomIndex = strs[Math.floor(Math.random() * strs.length)]
    setTimeout(() => {
        console.log(randomIndex)
    }, 3000)
}
printRandomString()


// საკლასო დავალება:

// შეადგინეთ ფუნქცია სახელად createPromise. ამ ფუნქციას არგუმენტად გადაეცით ერთი რიცხვი.

// თვითონ ფუნქციამ უნდა დააბრუნოს promise. თუ ფუნქციაში გადაცემული რიცხვი მეტია 10-ზე, მოახდინეთ resolve, ხოლო სხვა შემთხვევაში reject.

// resolve-ის დროს მისი არგუმენტი იყოს "resolve", reject-ის დროს მისი არგუმენტი იყოს "reject"
const myPromise = num => {
    return new Promise((resolve,reject) => {
        if (num > 10) {
            resolve("resolve")
        } else {
            reject("reject")
        }
    })
}
console.log(myPromise(9))
console.log(myPromise(12))