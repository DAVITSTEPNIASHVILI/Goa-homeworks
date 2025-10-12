// 2) გააკეთეთ ნახაზი, სადაც გამოჩნდება API როგორ მუშაობს, კავშირი როგორ ხდება თქვენს და სხვის კომპიუტერს (სერვერს) შორის.
// image.png
// 3) შედით jsonplaceholder.com-ზე და მოცემული api link დააკოპირეთ. შემდეგ ეს ლინკი გადაეცით fetch ფუნქციას და საბოლოოდ დაბრუნებული ინფორმაცია დაბეჭდეთ.
fetch("https://jsonplaceholder.typicode.com/todos")
    .then(res => res.json())
    .then(json => console.log(json))
// 4) შედით https://goa-api.vercel.app/-ზე და ნებისმიერი api link დააკოპირეთ. შემდეგ ეს ლინკი გადაეცით fetch ფუნქციას და საბოლოოდ დაბრუნებული ინფორმაცია დაბეჭდეთ.
fetch('https://goa-api.onrender.com/mentors')
    .then(res => res.json())
    .then(json => console.log(json));