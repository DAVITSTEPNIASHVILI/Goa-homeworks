// საკლასო დავალება:

// შექმენით ფუნქცია სახელად case_choice. ამ ფუნქციაში მომხმარებელს ჯერ შემოატანინეთ სთრინგი, ხოლო შემდეგ შეეკითხეთ რომელ ქეისში სურს გადაყვანა. თუ ქეისი იქნება "lower" ან "l", მაშინ შემოტანილი სთრინგი დაუბეჭდეთ lowercase-ში. ხოლო, თუ ქეისი იქნება "upper" ან "u", მაგ დროს სთრინგი დაუბეჭდეთ uppercase-ში.
function caseChoice(){
    let prompt1 = prompt("Enter string: ")
    let case1 = prompt("Which case do you want?")
    if (case1 === "lower" || case1 === "l") {
        console.log(prompt1.toLowerCase())
    } else if (case1 === "upper" || case1 === "u") {
        console.log(prompt1.toUpperCase())
    }
}
caseChoice()

// საკლასო დავალება:

// Loop through an array of strings and display the ones that include the word "new".
const arr = ["hello","new","world"]
for (const str of arr) {
    if (str.includes("new")){
        console.log(str)
    }
}

// საკლასო დავალება:

// Find the last occurrence of a character in a string and display -1 if it’s not found.
let sentence = "GOA is the best"
console.log(sentence.lastIndexOf("e"))