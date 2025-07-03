// საკლასო დავალება:

// Sum numbers until total exceeds 100

// Continuously ask the user to enter numbers using prompt(), adding each number to a total. Stop when the total exceeds 100.

// გამოიყენეთ do while ციკლი
let total = 0
do {
    let num = Number(prompt("Enter number: "))
    total += num
} while (total<=100)

// ```საკლასო დავალება:

// html-ის სტრუქტურაში ჩაამატეთ ერთი დაულაგებელი სია.

// js-ში გადაიტანეთ ეს ობიექტი:

// let myObj = {
//     name: "David",
//     surname: "Tezelashvili",
//     academy: "GOA",
//     isMentor: true,
//     num: 100,
//     hobbies: ["programming", "bike", "basketball"],
//     favColor: "Blue"
// }

// შემდეგ, ამ ობიექტს გადაუარეთ for in ციკლით. თითოეულ იტერაციაზე შექმენით ორი სიის ელემენტი. პირველი ელემენტის ტექსტი უნდა იყოს ობიექტის გასაღები. ხოლო მეორე ელემენტის ტექსტი უნდა იყოს მაგ გასაღების მნიშვნელობა. საბოლოოდ, ორივე დაულაგებელი სიის ელემენტი ჩაამატეთ დაულაგებელ სიაში```
let ul = document.getElementById("ul")
let myObj = {
    name: "David",
    surname: "Tezelashvili",
    academy: "GOA",
    isMentor: true,
    num: 100,
    hobbies: ["programming", "bike", "basketball"],
    favColor: "Blue"
}
for (let key in myObj) {
    let li1 = document.createElement("li")
    li1.textContent = key
    let li2 = document.createElement("li")
    li2.textContent = myObj[key]
    ul.appendChild(li1)
    ul.appendChild(li2)
}

// შექმენით მასივი, სადაც გექნებათ 2 სთრინგი, 2 რიცხვი და 2 ბულეანი.
// მასივს გადაუარეთ for of ციკლით. თითოეულ იტერაციაზე შეამოწმეთ მასივის ელემენტის მონაცემთა ტიპი. თუ ის სთრინგია, უბრალოდ დაბეჭდეთ. თუ ის რიცხვია, დაბეჭდეთ მასზე 10-ით მეტი რიცხვი. ხოლო, თუ ის ბულეანია, დაბეჭდეთ მისი საწინააღმდეგო ბულეანი.
let arr = ["david", "Data", 1, 2, true, false]
for (let char of arr) {
    if (typeof char === "string") {
        console.log(char)
    } else if (typeof char === "number") {
        console.log(char + 10)
    } else if (typeof char === "boolean") {
        console.log(!char)
    }
}