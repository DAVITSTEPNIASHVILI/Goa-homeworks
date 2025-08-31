const numbers = [2, 4, 6, 8, 10]
console.log(numbers.every(el => el%2 === 0))

const students = [
    { name: "Nika", grade: 85 },
    { name: "Ana", grade: 45 },
    { name: "Gio", grade: 70 },
    { name: "Mariam", grade: 30 }
]
console.log(students.filter(obj => obj.grade > 50))

const products = [
    { id: 1, name: "Laptop", price: 1200 },
    { id: 2, name: "Phone", price: 800 },
    { id: 3, name: "Headphones", price: 150 }
]
console.log(products.find(obj => obj.price === 800))

