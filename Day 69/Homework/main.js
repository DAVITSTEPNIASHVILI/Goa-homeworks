// Determine if a number is even or odd.
// Take a number as input.
let prompt1 = Number(prompt("Enter number: "))
// Use a conditional statement to check if the number is even or odd.
if (prompt1 % 2 === 0) {
    console.log("Number is even")
} else if (prompt1 === 2) {
    console.log("Number is even")
} else {
    console.log("Number is odd")
}
// Display the result.
console.log(prompt1)
// 3)
// Assign a grade based on a score.
// Take a score as input.
let score = Number(prompt("Enter score: "))
// Use conditional statements to assign a grade based on the following:
if (score >= 90) {
    console.log("Grade A")
} else if (score >= 80) {
    console.log("Grade B")
} else if (score >= 70) {
    console.log("Grade C")
} else if (score >= 60) {
    console.log("Grade D")
} else {
    console.log("Fail")
}
// 90 and above: Grade A

// 80–89: Grade B

// 70–79: Grade C

// 60–69: Grade D

// Below 60: Fail

// Display the grade.
// 4)
// Determine the largest among three numbers.
// Take three numbers as inputs.
let num1 = Number(prompt("Enter number: "))
let num2 = Number(prompt("Enter number: "))
let num3 = Number(prompt("Enter number: "))
// Use conditional statements to find and display the largest number.
if (num1 > num2 && num1 > num3 ) {
    console.log("First number is the largest")
} else if (num2 > num1 && num2 > num3) {
    console.log("Second number is the largest")
} else if (num3 > num1 && num3 > num2) {
    console.log("Third number is the largest")
} else if (num1 === num2 && num2 === num3) {
    console.log("Numbers are equal")
}
// If numbers are equal, mention it.
// 5)
// Check if a character is a vowel or a consonant.
// Take a single character as input.
let character = prompt("Enter random letter: ")
// Use conditional statements to check if it’s a vowel (a, e, i, o, u) or a consonant.
if (character === "a" || character === "A" || character === "e" || character === "E" || character === "i" || character === "I" || character === "o" || character === "O" || character === "u" || character === "U") {
    console.log("It's vowel")
} else {
    console.log("it's consonant")
}
// Display the result.
// 6)
// Check if a number is divisible by 3 and 5.
// Take a number as input.
let numinput = Number(prompt("Enter number: "))
// Use conditional statements to check if it’s divisible by both 3 and 5.
if (numinput % 3 === 0 && numinput % 5 === 0) {
    console.log("Divisible by both")
} else if (numinput % 3 === 0) {
    console.log("Divisible by 3 only")
} else if (numinput % 5 === 0) {
    console.log("Divisible by 5 only")
} else {
    console.log("Not divisible by either")
}
// Display appropriate messages:

// Divisible by both

// Divisible by 3 only

// Divisible by 5 only

// Not divisible by either
// 7)
// Check if a person is a child, teenager, adult, or senior based on age.
// Take age as input.
let age = Number(prompt("Enter your age: "))
// Use conditional statements to classify:
if (age <= 12) {
    console.log("Child")
} else if (age <= 19) {
    console.log("Teenager")
} else if (age <= 59) {
    console.log("Adult")
} else if (age >= 60) {
    console.log("Senior")
}
// 0–12: Child
// 13–19: Teenager
// 20–59: Adult
// 60 and above: Senior
// Display the category.

// 8)
// Print numbers from 1 to 5.
// Use a while loop to print numbers from 1 to 5, each on a new line.
let nums = 1
while (nums < 6) {
    console.log(nums)
    nums++
}
// 9)

// Print even numbers from 2 to 10.
// Use a while loop to print even numbers starting from 2 up to 10.
let nums2 = 2
while (nums2 < 10) {
        console.log(nums2)
        nums2 = nums2 + 2
}
// 10)
// Print numbers from 10 down to 1.
// Use a while loop to print numbers in reverse from 10 down to 1.
let nums3 = 10
while (nums3 < 1) {
    console.log(nums3)
    nums3 = nums3 - 1
}
// 11)
// Print numbers from 1 to 10.
// Use a for loop to print numbers from 1 to 10.
for (let i=1;i<10;i++) {
    console.log(i)
}
// 12)
// Print the first 5 multiples of 3.
// Use a for loop to print 3, 6, 9, 12, and 15.
for (let i=3;i<16;i=i+3) {
    console.log(i)
}
// 13)
// Print numbers from 10 to 1 in reverse.
// Use a for loop to print numbers counting down from 10 to 1.
let nums4 = 10
while (nums4 < 1) {
    console.log(nums4)
    nums4 = nums4 - 1
}
// 14)
// Print all even numbers between 1 and 20.
// Use a for loop to check and print even numbers from 1 to 20.
for (let i=0;i<21;i=i+2) {
    console.log(i)
}
// 15)
// Print the sum of numbers from 1 to 5.
// Use a for loop to add numbers from 1 to 5 and print the final sum.
for (let i=1;i<6;i++) {
    console.log(sum(i))
}