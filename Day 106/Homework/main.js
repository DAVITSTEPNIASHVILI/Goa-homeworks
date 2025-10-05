// 2)

// შეადგინეთ ფუნქცია სახელად createPromise. ამ ფუნქციას არგუმენტად გადაეცით ერთი რიცხვი.

// თვითონ ფუნქციამ უნდა დააბრუნოს promise. თუ ფუნქციაში გადაცემული რიცხვი ლუწია, მოახდინეთ resolve, ხოლო სხვა შემთხვევაში reject.

// resolve-ის დროს მისი არგუმენტი იყოს "resolve", reject-ის დროს მისი არგუმენტი იყოს "reject".

// ფუნქციის მიერ დაბრუნებულ promise-ზე გამოიძახეთ then მეთოდი, რომელსაც გადასცემთ როგორც successHandler-ს, ასევე failureHandler-ს. ორივე handler-ის დავალებაა, რომ უბრალოდ გადაცემული ინფორმაცია დაბეჭდონ.
const createPromise = num => {
    return new Promise((resolve,reject) => {
        if (num %2 === 0) {
            resolve("resolve")
        } else {
            reject("reject")
        }
    })
}
const successHandler = res => {
    console.log(res)
}
const successFailure = rej => {
    console.log(rej)
}
createPromise(4).then(successHandler,successFailure)
createPromise(5).then(successHandler,successFailure)