// const myDiv = (
//     <div>
//         <p id="p1">hello</p>
//         <h1 id="h1">Hello</h1>
//         <button id="btn">Click me</button>
//         <h2 id="h2">Hello</h2>
//         <div id="div">hello</div>
//     </div>
// );

// საკლასო დავალება:

// შექმენით ობიექტი, 3 კუთვნილებით და თითოეულში ნებისმიერი სთრინგი შეინახეთ.

// შექმენით ცვლადი, სადაც შეინახება jsx-ის ელემენტი div. div-ში უნდა გქონდეთ 3 პარაგრაფი. თითოეული პარაგრაფის ტექსტი უნდა იყოს ობიექტის კუთვნილება.
const myObj ={
    name:"David",
    surname:"Stepniashvili",
    age:12
}
const myDiv = (
    <div>
        <p>{myObj.name}</p>
        <p>{myObj.surname}</p>
        <p>{myObj.age}</p>
    </div>
);

// საკლასო დავალება:

// შექმენით jsx-ის ელემენტი, რომელშიც გექნებათ ერთი სურათი. ამ სურათს გაუწერეთ onClick ატრიბუტი, რომელსაც გადაეცემა arrow ფუნქცია.

// ამ arrow ფუნქციაში, უნდა უზრუნველყოთ, რომ სურათზე დაკლიკებისას არ დარეფრეშდეს ვებსაიტი. ასევე, თუ სურათის მისამართი პირველი მისამართია, მაშინ გაუწერეთ მისამართად მეორე მისამართი, ხოლო სხვა შემთხვევაში პირველში.
const img = (<img src="image.png" onClick={(e) => {
    e.preventDefault()

    if (img.src === "image.png") {
        img.src === "image copy.png"
    } else {
        img.src === "image.png"
    }
}} />
);