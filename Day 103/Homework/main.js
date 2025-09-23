// 3) Create a Class for a Teacher

// Make a class named Teacher.

// Add a constructor that takes name and subject.

// Add a method introduce() that prints: "Hello, I am NAME and I teach SUBJECT.".
class Teacher {
    constructor(name,subject) {
        this.name = name
        this.subject = subject
    }
    introduce() {
        console.log(`Hello, I am ${this.name} and I teach ${this.subject}`)
    }
}
const math = new Teacher("Sofo","math")
console.log(math)
math.introduce()
// 4) Create a Class for a Phone

// Make a class named Phone.

// Add a constructor that takes brand and model.

// Add a method ring() that prints: "The BRAND MODEL is ringing!".
class Phone {
    constructor(brand,model) {
        this.brand = brand
        this.model = model
    }
    ring() {
        console.log(`The ${this.brand} ${this.model} is ringing!`)
    }
}
const iphone = new Phone("Apple","Iphone 13")
console.log(iphone)
iphone.ring()
// 5) Create a Class for a Movie

// Make a class named Movie.

// Add a constructor that takes title and year.

// Add a method play() that prints: "Now playing: TITLE (YEAR)".
class Movie {
    constructor(title,year) {
        this.title = title
        this.year = year
    }
    play() {
        console.log(`Now playing: ${this.title} ${`(${this.year})`}`)
    }
}
const HarryPotter = new Movie("Harry Potter","2001")
console.log(HarryPotter)
HarryPotter.play()
// 6) Create a Class for a Cat

// Make a class named Cat.

// Add a constructor that takes name and color.

// Add a method meow() that prints: "NAME the COLOR cat says Meow!".
class Cat {
    constructor(name,color) {
        this.name = name
        this.color = color
    }
    meow() {
        console.log(`${this.name} the ${this.color} cat says Meow!`)
    }
}
const Cats = new Cat("jessi","brown")
console.log(Cats)
Cats.meow()
// 7) Create a Class for a Bank Card

// Make a class named BankCard.

// Add a constructor that takes cardNumber and balance.

// Add a method withdraw(amount) that decreases the balance and prints the new balance.
class BankCard {
    constructor(cardNumber,balance) {
        this.cardNumber = cardNumber
        this.balance = balance
    }
    withdraw(amount) {
        console.log(`${this.balance - amount}`)
    }
}
const card = new BankCard(2444242424232342,5000)
console.log(card)
card.withdraw(400)