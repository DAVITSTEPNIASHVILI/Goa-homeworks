// საკლასო დავალება:

// შექმენით ასინქრონული ფუნქცია სახელად getFootballData, სადაც მოცემულ ლინკზე გააგზავნით requests და წამოღებულ ინფორმაციას თან გადაიყვანთ json ფორმატში, რომ შემდეგ დაბეჭდოთ ის.

// https://www.thesportsdb.com/api/v1/json/123/searchteams.php?t=Arsenal
const getFootballData = async () => {
    const response = await fetch("https://www.thesportsdb.com/api/v1/json/123/searchteams.php?t=Arsenal")
    const resolved = await response.json()
    console.log(resolved)
}



// საკლასო დავალება:

// შექმენით ფუნქცია, რომელიც დააბრუნებს promise-ს 2 წამში. თუ randomNumber ნაკლები იქნება 0.5-ზე promise-მა მოახდინოს resolve "success" სთრინგით, ხოლო სხვა შემთხვევაში reject "fail" სთრინგით.

// შექმენით ასინქრონული ფუნქცია, სადაც გექნებათ try catch კოდის ბლოკი - დაიბეჭდება resolved value / rejected value.
const returnPromise = () => {
    let randomNum = Math.random()
    return new Promise((res,rej) => {
        setTimeout(() => {
            if (randomNum<0.5) res("success")
            else rej("fail")
        }, 2000)
    })
}
const asyncFunction = async () => {
    try {
        returnPromise()
    } catch (error) {
        console.log(error)
    }
}
// საკლასო დავალება:

// შექმენით ასინქრონული ფუნქცია, სადაც აუცილებლად გექნებათ try catch ბლოკი. try-ში fetch ფუნქცია გამოიძახეთ და გადაეცით ნებისმიერი ლინკი. მაგ ლინკიდან ამოღებულ ინფორმაციაზე გამოიძახეთ json მეთოდი და საბოლოოდ დაბეჭდეთ ეგ ინფორმაცია. catch-ში კი დაბეჭდეთ error ობიექტში.
const asyncFunc = async () => {
    try {
        const api = await fetch("https://www.thesportsdb.com/api/v1/json/123/searchteams.php?t=Arsenal")
        const apiJson = await api.json()
        console.log(apiJson)
    } catch (error) {
        console.log(error)
    }
}