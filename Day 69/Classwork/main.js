// შექმენით ფუნქცია სახელად usingWhileLoop. ამ ფუნქციაში აიღეთ ერთი ცვლადი, რომელიც თავიდან 0-ის ტოლი იქნება. სანამ ამ ცვლადის მნიშვნელობა ნაკლებია 100-ზე, დაბეჭდეთ ის და შემდეგ გაზარდეთ ერთით.
// ფუნქცია გამოიძახეთ მაშინ, როდესაც ვებსაიტი ჩაიტვირთება
function usingWhileLoop() {
    let num = 0
    while (num < 100) {
        console.log(num)
        num = num + 1
    }
}
usingWhileLoop()


function correctUserPassword() {
    let correctPassword = "datuna"
    let prompt = prompt("Enter password: ")
    let try2 = 0
    while (prompt !== correctPassword) {
        let prompt = prompt("Enter password: ")
        try2++
    }
    console.log("Correct guess, you tried" + try2)

}
correctUserPassword()


for (let i=0; i<10;i++) {
    console.log("David Stepniashvili")
}