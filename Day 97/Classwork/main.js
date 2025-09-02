// საკლასო დავალება:

// Given an array of 5 names, use forEach to print a greeting message for each name.

// message: "Hello, {name}!"
const names = ["David","Data","Nika","Petre","Beqa"]
names.forEach(el => {
    console.log(`Hello ${el}`)
})

// საკლასო დავალება:

// Given an array of prices, use map to apply a 10% discount to each price and return the discounted array
const prices = [10,50,30,70,40]
const discountedPrice = prices.map(el => el * 0.9)
console.log(discountedPrice)


// საკლასო დავალება:

// Use map to transform an array of email addresses into an array of usernames (the part before "@").
const emails = [
    "alex.morgan92@example.com",
    "sophie_williams07@testmail.com",
    "daniel.lee88@webmail.net",
    "chris.johnson54@myinbox.org",
    "emma.jackson23@mailbox.co",
    "ryan_taylor77@fastmail.io",
    "natalie.green11@postmail.net",
    "michael.brown45@inboxhub.com",
    "olivia.smith29@cloudmail.org",
    "james_wilson63@netmail.co"
]
console.log(emails.map(el => el.split("@")[0]))