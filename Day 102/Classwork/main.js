// საკლასო დავალება:

// html-ის დოკუმენტში ჩაამატეთ ერთი პარაგრაფი და ერთი ღილაკი. როდესაც მომხარებელი დააკლიკებს ღილაკს, პარაგრაფში უნდა აჩვენოთ ახლანდელი დრო, შემდეგ ფორმატში: "წელი-თვე-დღე, საათი-წუთი-წამი".
let p = document.getElementById("p")
let btn = document.getElementById("btn")
btn.addEventListener("click",() => {
    p.textContent = `${new Date().getFullYear()}-${new Date().getMonth()+1}-${new Date().getDate()}, ${new Date().getHours()}-${new Date().
    getMinutes()}-${new Date().getSeconds()}`
})

// საკლასო დავალება:

// შექმენით ობიექტი, სადაც გექნებათ 5 წყვილი.

// დაბეჭდეთ მთლიანად ობიექტი, შემდეგ დაბეჭდეთ თითოეული გასაღების მნიშვნელობა.
const myObj = {
    name:"David",
    surname:"Stepniashvili",
    age: 12,
    hobies: ["programing","playing football"],
    address: "Tbilisi"
}
console.log(myObj)
console.log(myObj.name)
console.log(myObj.surname)
console.log(myObj.age)
console.log(myObj.hobies)
console.log(myObj.address)