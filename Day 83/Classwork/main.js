// // საკლასო დავალება:

// // js-ის კოდით და კომენტარებით ჩამოწერეთ block, function და global scope-ების თითო-თითო მაგალითი
// {var i = 5} // ცვლადს block scope აქვს და მისი გამოყენება მხოლოდ {}-ასეთ ფრჩხილებში
// console.log(i) // ეს error-ს გამოიტანს

// function func2(){
//     let x = 5 // ცვლადს function scope აქვს და მისი გამოყენება მხოლოდ {}-ასეთ ფრჩხილებში
// }
// func2()
// console.log(x) // ეს error-ს გამოიტანს

// let y = 5 // ცვლადს global scope აქვს და მისი გამოყენება ყველგან შესაძლებელია
// {console.log(y)} // არ გამოიტანს error-ს


// // საკლასო დავალება:

// // Extract Leading Number from a Mixed String
// // Given a string like "100px" or "25.5kg", use parseInt to extract the numeric part and ignore the rest.
// console.log(parseInt("100px"))
// console.log(parseInt("25.5kg"))

// საკლასო დავალება:

// შექმენით ფუნქცია, სადაც მომხმარებელს შემოტანინებთ ორ რიცხვს, ისინი შეინახეთ Number მონაცემთა ტიპში, უბრალოდ მათზე გამოიყენეთ parseFloat ფუნქცია. შემდეგ ჩამოწერეთ ამ რიცხვებს შორის შემდეგი მათემატიკური ოპერაციები და დაბეჭდეთ შედეგეგი: +, -, *, /, **, //, %
(() => {
    let num1 = parseFloat(prompt("Enter number"))
    let num2 = parseFloat(prompt("Enter number"))
    console.log(num1 + num2)
    console.log(num1 - num2)
    console.log(num1 * num2)
    console.log(num1 / num2)
    console.log(num1 ** num2)
    console.log(num1 % num2)
})()