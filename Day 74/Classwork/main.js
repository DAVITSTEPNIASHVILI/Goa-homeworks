// საკლასო დავალება
// შექმენით ერთი ღილაკი.ღილაკზე დაჭერი დროს დაიწყოს set interval და ღილაკს შეეცვალოს ფერი,რომლებიც იქნებიან მოთავსებულნი სიაში.შეეცვალოს ფერი ხუთჯერ,შემდეგ კი გაითიშოს,ყოველ 2 წამში შეეცვალოს ფერი
// let btn = document.getElementById("btn")
// let count = 0 
// const colors = ["black","red","green","yellow","greenyellow"]
// let changingColors = setInterval(function(){
//     btn.style.backgroundColor = colors[count]
//     count++
    
//     if (count===5) {
//         clearInterval(changingColors)
//     }
// },2000)
// btn.addEventListener('click',changingColors)

// შექმენით ერთი ღილაკი და ინფუთი.ინფუთში აუცილებლად უნდა შეიყვანოთ ფერი(hex code).ღილაკზე დაჭერის შემთხვევაში კი body-ს შეეცვალოს ფონი და 
// გახდეს თქვენ მიერ hex code-ით ჩაწერილი ფერი
let btn = document.getElementById("btn")
let inp = document.getElementById("inp")
btn.addEventListener('click',function(){
    document.body.style.backgroundColor = inp.value
})