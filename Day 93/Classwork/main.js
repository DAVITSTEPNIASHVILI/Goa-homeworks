// საკლასო დავალება:

// მომხმარებელს ჯერ შემოატანინეთ საწყისი სთრინგი, შემდეგ შესაცვლელი ნაწილი და ბოლოს რითი უნდა შეცვალოს. შემდეგ შეეკითხეთ მხოლოდ ერთხელ უნდა შეცვლა და ყველა შემხვედრზე.

// თუ ის ერთს აირჩევს, გამოიყენეთ replace მეთოდი საწყის სთრინგზე, ხოლო სხვა შემთხვევაში replaceAll მეთოდი. საბოლოოდ კი კონსოლში დაბეჭდეთ მიღებული შედეგი.
let input = prompt("Enter string: ")
let input1 = prompt("შესაცვლელი ნაწილი")
let input2 = prompt("რითი შევცცვალო")
let input3 = prompt("ერთხელ გინდათ შეცვლა თუ ყველა ჯერზე?")
if (input3 === "ერთხელ მინდა შეცვლა") {
    console.log(input.replace(input1,input2))
} else if (input3 === "ყველა ჯერზე მინდა შეცვლა") {
    console.log(input.replaceAll(input1,input2))
}

// საკლასო დავალება:

// Given an array of numbers from 1 to 20, use slice to extract every number from the 5th element up to (but not including) the 15th element.

// Create an array of random numbers. Use slice to remove the first and last elements, leaving only the "middle part".
const nums = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]
console.log(nums.slice(4,14))
console.log(nums.slice(1,-1))

// საკლასო დავალება:

// Split the string "apple,banana,orange" into an array of fruits.
const fruit = "apple,banana,orange"
console.log(fruit.split(","))
// Split the string "Hello World" into an array of words.
const word = "hello world,apple"
console.log(word.split(" "))
// Split the string "a-b-c-d-e" into individual letters using "-" as the separator.
const abcd = ["a-b-c-d-e"]
console.log(abcd.split("-"))