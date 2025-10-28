// საკლასო დავალება:

// შექმენით 3 js-ის ფაილი. 

// პირველში შექმენით ფუნქცია, რომელსაც გადაეცემა რიცხვი და აბრუნებს მის კვადრატს, დააექსპორტეთ ეს ფუნქცია. 

// მეორეში შექმენით ფუნქცია, რომელიც აბრუნებს true-ს თუ გადაცემული რიცხვი ლუწია, სხვა შემთხვევაში false-ს (ამ შემოწმებისთვის გამოიყენეთ ternary operator), დააექსპორტეთ ეს ფუნქცია.

// მესამე ფაილში დააიმპორტეთ ორივე ფუნქცია. ჯერ გამოიძახეთ პირველი და მისი დაბრუნებული მნიშვნელობა გადაეცით მეორე ფუნქციას. საბოლოოდ დაბეჭდეთ მეორე ფუნქციის მიერ დაბრუნებული ინფორმაცია.
import { myFunc } from "a.js";
import { num } from "b.js";
console.log(num(myFunc(5)))

// საკლასო დავალება:

// prompt-ით მომხმარებელს შემოატანინეთ ნებისმიერი სიტყვა და ეს სიტყვა შეინახეთ localStorage-ში.

// შემდეგ, localStorage-დან წამოიღეთ ეს სიტყვა და ის textContent-ად გაუწერეთ პარაგრაფს. 

// როდესაც ვებსაიტი დარეფრეშდება და localStorage-ში ინფორმაცია უკვე გექნებათ შენახული, პარაგრაფის textContent უნდა იყოს localStorage-ში ბოლოს შენახული
// const input = prompt("Enter Word: ")
// const p1 = document.getElementsByTagName()[0]
// input.addEventListener("input", e => {
//     e.preventDefault()
//     localStorage.setItem("input",prompt.value)

//     p1.textContent = localStorage.getItem("input")
// })

// საკლასო დავალება:

// ფორმაში ჩაამატეთ ორი ინფუთი, ერთი სახელისთვის, მეორე მეილისთვის. როცა ფორმა დადასტურდება, ორივე ინფორმაცია შეინახეთ localStorage-ში და შემდეგ ეს ინფორმაციები წამოიღეთ localStorage-დან, textContent-ად გაუწერეთ h2-ს.
const form = document.getElementsByTagName("form")[0]
const h2 = document.getElementsByTagName("h2")[0]
form.addEventListener("submit", () => {
    const input = document.getElementsByTagName("input")[0]
    const input2 = document.getElementsByTagName("input")[1]
    localStorage.setItem("name",input)
    localStorage.setItem("email",input2)
    h2.textContent = localStorage.getItem("name")
})