function concStrings() {
    let name = prompt("Enter name: ")
    let surname = prompt("Enter surname: ")
    console.log(name + surname)
}
function compareStrings() {
    let word1 = prompt("Enter word: ")
    let word2 = prompt("Enter word: ")
    console.log(word1 == word2)
    console.log(word1 === word2)
}
compareStrings();

function compareNums(num1,num2) {
    console.log(num1 == num2)
    console.log(num1 === num2)
    console.log(num1 >= num2)
    console.log(num1 > num2)
    console.log(num1 <= num2)
    console.log(num1 < num2)
    console.log(num1 != num2)
    console.log(num1 !== num2)
}
compareNums(100,122)
compareNums(150,322)
compareNums(200,522)