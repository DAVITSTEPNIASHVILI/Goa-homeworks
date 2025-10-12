// საკლასო დავალება:

// შექმენით ფუნქცია, სახელად workingOnPromise, რომელსაც გადაეცემა ერთი სთრინგი.

// ფუნქციაში უნდა შეიქმნას promise, რომელიც resolve-ს მაშინ მოახდენს, როდესაც სთრინგის სიგრძე მეტი იქნება 5-ზე, ხოლო სხვა შემთხვევაში მოხდება reject. promise-ში უნდა გქონდეთ ასინქრონული ოპერაცია, ანუ სთრინგის შემოწმება ჩასვით setTimeout-ში.

// თვითონ ფუნქციაშივე promise-ზე გამოიძახეთ then და catch მეთოდები, რომლებიც დაბეჭდავენ დაბრუნებულ ინფორმაციას.

// საბოლოოდ, ფუნქცია გამოიძახეთ 3-ჯერ, განსხვავებული სთრინგებით.
const workingOnPromise = str => {
    new Promise((res,rej) => {
        setTimeout (() => {
            if (str.length > 5) res("resolve")
            else rej("reject")
        },2000)
    }).then(success => console.log(success))
    .catch(failure => console.log(failure))
}
workingOnPromise("Hello")
workingOnPromise("student")
workingOnPromise("good")


// საკლასო დავალება:

// შექმენით ფუნქცია, რომელიც დააბრუნებს promise-ს. ამ promise-მა ყოველთვის resolve უნდა მოახდინოს და resolve-ის არგუმენტი უნდა ჰქონდეს "resolved".

// ამ ფუნქციით შექმენით 3 promise და სამივე გადაეცით Promise.all მეთოდის მასივს.
// შემდეგ გაწერეთ მხოლოდ then მეთოდის გამოძახება და მასში უბრალოდ დაბეჭდეთ დაბრუნებული მნიშვნელობა.
const prom = () => {
    return new Promise((res) => {
        res("resolved")
    })
}
const promise1 = prom()
const promise2 = prom()
const promise3 = prom()
Promise.all([promise1,promise2,promise3])
    .then(res => console.log(res))