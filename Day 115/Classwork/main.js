// საკლასო დავალება:

// შექმენით დაულაგებელი სია, სადაც გექნებათ 1 ან 2 სიის ელემენტი.

// თუ math.random() მეტია 0.5-ზე, დაულაგებელ სიაში ჩაჯდეს სიის ელემენტი ნებისმიერი ტექსტით.

// თუ math.random() მეტია 0.5-ზე, სიის მეორე ელემენტის ტექსტი იყოს "hello", ხოლო სხვა შემთხვევაში "goodbye"
const randomNum = Math.random()
const ul = (
    <ul>
        {randomNum > 0.5 && <li>hello</li>}
        {randomNum  > 0.5 ? <li>hello</li> : <li>goodbye</li>}
    </ul>
);

// საკლასო დავალება:

// შექმენით მასივი, სადაც ჩამოწერთ თქვენს ინტერესებს.

// შექმენით დაულაგებელი სია, სადაც ჩააშენებთ js-ის ლოგიკას. აქ უნდა გამოიყენოთ map მეთოდი და შექმნათ სიის ელემენტები. თითოეულ სიის ელემენტს ტექსტად და key პარამეტრის მნიშნელობად გაუწერეთ callback ფუნქციის პარამეტრი.
const myArr = ["programing","riding bike"]
const jsxElements = (
    <ul>
        {myArr.map(el => (
            <li key={el}>{el}</li>
        ))}
    </ul>
);


// საკლასო დავალება:

// თქვენი სურვილის მიხედვით დაწერეთ ისეთი jsx-ის სინტაქსის კოდი, სადაც გექნებათ ternary operator, && და სია, სადაც მის ელემენტებს ექნებათ გასაღებები.
const randomBull = Math.random() > 0.5
const list = (
    <ul>
        {randomBull > 0.5 && <li key="hello">hello</li>}
        {randomBull > 0.5 ? <li key="hello1">hello</li> : <li key="goodbye">goodbye</li>}
    </ul>
);