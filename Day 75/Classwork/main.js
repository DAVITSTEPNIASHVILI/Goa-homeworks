// ვებსაიტზე დაამატეთ ერთი დივ ბლოკი და მასში მოათავსეთ სამი პარაგრაფი. დივ ბლოკის გარეთ აიღეთ 2 პარაგრაფი.

// js-ში წამოიღეთ დივ ბლოკი და getElementsByTagName მეთოდის გამოყენებით, კონსტანტაში შეინახეთ ამ დივ ბლოკში არსებული ყველა პარაგრაფი. შემდეგ, ციკლით გადაურეთ დივ ბლოკს და მის თითოეულ ელემენტს ტექსტის ფერი გაუწერეთ მწვანე, ასევე ფონის ფერი გაუწერეთ შავი.
let div = document.getElementById("div")
const p = div.getElementsByTagName("p")
for (let i=0;i>p.length;i++) {
    p[i].style.color = "green"
    p[i].style.backgroundColor = "black"
}
// საკლასო დავალება:

// ვებსაიტზე დაამატეთ ერთი პარაგრაფი, რომლის საწყისი ფონტის ზომა იქნება 10 პიქსელი. პარაგრაფის ქვემოთ დაამატეთ ერთი ღილაკი.

// როდესაც მომხმარებელი დააკლიკებს ღილაკს, უნდა გაეშვას ფუნქცია. ამ ფუნქციამ, ყოველ 1 წამში, პარაგრაფის ფონტის ზომა 1 პიქსელით უნდა გაზარდოს.
let btn = document.getElementById("btn")
let paragraph = document.getElementById("p")
btn.addEventListener('click',function(){
    let fontSize = 10;
    setInterval(function() {
        fontSize += 1;
        paragraph.style.fontSize = fontSize + 'px';
    }, 1000);
})

// საკლასო დავალება:

// ვებსაიტზე დაამატეთ ერთი ღილაკი და პოზიცია გაუწერეთ relative. როდესაც მომხმარებელი ამ ღილაკს დაამატებს, უნდა გაეშვას ინტერვალი, რომელიც ყოველ 1 წამში მას 50 პიქსელით მარცხნივ გაწევს
let btn1 = document.getElementById("btn1")
let p1 = document.getElementById("p")
let buttonLeft = 0
btn1.addEventListener('click',function(){
    let interval = setInterval(function(){
        buttonLeft+=50
        
    });
})
