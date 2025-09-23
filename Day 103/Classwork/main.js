// საკლასო დავალება:

// Create a Class for a Car Make a class named Car. Add a constructor that takes brand and model. Add a method drive() that prints: "The BRAND MODEL is driving.".
// class car {
//     constructor(brand,model) {
//         this.brand = brand
//         this.model = model
//     }
//     drive() {
//         return `The ${this.brand} ${this.model} is driving.`
//     }
// }
// const mercedesGclass = new car("Mercedes","G class")
// console.log(mercedesGclass)
// console.log(mercedesGclass.drive())

// საკლასო დავალება:

// Create a Class for a Bank Account

// Make a class named BankAccount.

// Add a constructor that takes owner and balance.

// Add a method deposit(amount) that increases the balance and prints the new balance.
class BankAccount {
    constructor(owner,balance) {
        this.owner = owner
        this.balance = balance
    }
    deposit(amount) {
        this.balance += amount
        return this.balance
    }
}
const bank = new BankAccount("blabla",20)
console.log(bank)
console.log(bank.deposit(50))

// საკლასო დავალება:

// Create a Class for a Book

// Make a class named Book.

// Add a constructor that takes title and author.

// Add a method describe() that prints: "The book TITLE is written by AUTHOR.".
class book {
    constructor(title,author) {
        this.title = title
        this.author = author
    }
    describe() {
        return `The book ${this.title} is writen by ${this.author}.`
    }
}
const books = new book("Harry Potter","J.K. Rowling")
console.log(books)
console.log(books.describe())