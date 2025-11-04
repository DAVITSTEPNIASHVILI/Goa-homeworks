// 5) შექმენით jsx-ის ელემენტი და ამ ელემენტში უნდა გეწეროთ ისეთი კოდი, რაც მოიცავს შემდეგ საკითხებს:
//     self-closing tags
//     ელემენტის ტექსტად js-ის კოდის ჩაწერა.
//     ელემენტის ატრიბუტად js-ის კოდის ჩაწერა.
//     ელემენტზე მოვლენის მსმენელის გაწერა.
const names = "David"
const imgSrc = "image copy.png"
const myDiv = (
    <div>
        <img src="image.png" />
        <h3>Hello {names}</h3>
        <img src={imgSrc} />
        <button onClick={() => alert(names)}>Click to show your name</button>
    </div>
);