// საკლასო დავალება:

// html-ის სტრუქტურაში ჩაამატეთ ერთი პარაგრაფი და ერთი ღილაკი. ორივე ელემენტი წამოიღეთ js-ში. 

// როდესაც მომხმარებელი დააკლიკებს ღილაკს, უნდა გაეშვას chooseRandomColor ფუნქცია და ამ ფუნქციის დაბრუნებული ფერი გაეწეროს ტექსტის ფერად პარაგრაფს.

// chooseRandomColor:
//   გადაეცით მასივი, სადაც იქნება 5 განსხვავებული ფერი. აარჩიეთ random ფერი მასივიდან და ეს ფერი გაუწერეთ პარაგრაფს color კუთვნილებაში.
let p = document.getElementById("p1")
let b = document.getElementById("b1")
function chooseRandomColor() {
    const colors = ["red","yellow","green","orange","blue"]
    const randomColor = Math.floor(Math.random() * colors.length)
    const random = colors [randomColor]
    p.style.color = random
}
b.addEventListener("click",chooseRandomColor)

// საკლასო დავალება:

// Level 100 special - html-ის სტრუქტურაში ჩაამატეთ 100 პარაგრაფი. ყველა წამოიღეთ js-ში და თითოეულ პარაგრაფს ტექსტად გაუწერეთ "Level 100, GOA best".
const allP = document.getElementsByTagName("p");
for (let i = 0; i < allP.length; i++) {
    allP[i].textContent = "Level 100, GOA best";
}

// საკლასო დავალება:

// Given an array - ['apple', 'banana', 'cherry'], pick a random element and log it in console
const friuts = ['apple', 'banana', 'cherry']
const randomFruit = friuts[Math.floor(Math.random() * friuts.length)]
console.log(randomFruit)