const elements = [1,2,3,4,5]
const checkOdd = elements.every(numbers => numbers % 2 !== 0)
console.log(checkOdd)
// every მეთოდით შეგვიძლია შევამოწმოთ ნებისმიერი პირობა. მისი დაბრუნებული მნიშვნელობა ბულეანია. აბრუნებს true-ს როდესაც ყველა ელემენტი ეთანხმება პირობას, ხოლო false-ს იმ შემთხვევაში თუ ერთი მაინც არ ეთანხმება პირობას.

const names = ["Giorgi","Deme","Davit","Irakli","Gia"]
const checkNames = names.every(names1 => names1.length > 3)
console.log(checkNames)


const odd = [1,2,3,4,5,6,7,8,9,10]
const even = [1,2,3,4,5,6,7,8,9,10]
const forOdd = odd.filter(num => num%2 !== 0)
const foreven = even.filter(num => num%2 === 0)
console.log(forOdd)
console.log(foreven)

const words = ["apple","world","hello","banana","lion"]
const findWord = words.find(word => word.length === 4)
console.log(findWord)

// filter მეთოდით ჩვენ შეგვიძლია გამოვყოთ ის ელემენტები რომლებიც ეთანხმებიან პირობას
// find მეთოდით ვპოულობთ ისეთ ელემენტს რომელიც ეთანხმება პირობას