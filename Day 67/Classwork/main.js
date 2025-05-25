function myForm(e) {
    e.preventDefault();
    let form = document.getElementById("my_form");
    let name = form.elements.name.value;
    let surname = form.elements.surname.value;
    let password = form.elements.password.value;
    console.log(name,surname,password)
    form.reset()
}

let user1 = {
    name: "David",
    surname: "Stepniashvili",
    academy: "GOA",
    role: "programer",
    city: "Tbilisi",
    favColor: "green",
    favLanguage: "Georgian",
    logHello() {
        console.log("Hello")
    },
    logproperty() {
        console.log(this.academy)
    }
}
console.log(user1)
console.log(user1.name)
user1.favColor = "blue"
console.log(user1.favColor)
user1.logproperty()