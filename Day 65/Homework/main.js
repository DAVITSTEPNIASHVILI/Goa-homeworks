// Prompt the user for their favorite hobby and display it in an alert.
let userHobby = prompt("Your fav hobby: ")
alert(userHobby)
// Ask the user for their first and last name (two prompts), then concatenate and display the full name in an alert.
let userName = prompt("Your name: ")
let userSurname = prompt("Your surname: ")
let fullName = userName + userSurname
alert(fullName)
// Prompt the user for a message and update the text content of a <p> element on the page with it.
let userMessege = prompt("Enter messege: ")
document.getElementById("p1").textContent = userMessege
// Prompt the user for their favorite emoji and display it in an alert along with a thank you message.
let userEmoji = prompt("Enter fav emoji: ")
alert(userEmoji + " Thank you!")
// Prompt the user to enter a word and use document.title to set the page’s title to that word.
let userWord = prompt("Enter word: ")
document.title(userWord)
// Create a form with a text input and a button. When the button is clicked, take the value from the text input and display it in an alert.
function showMessage(event) {
    event.preventDefault();
    alert(document.getElementById("textInput").value);
}
// Make a form with a color input and a submit button. When submitted, set the page’s background color to the selected color.
function color(x) {
    x.preventDefault();
    let userColor = document.getElementById("color").value
    userColor.style.document.getElementById("color").value
}
// Build a form with two text inputs (like "first name" and "last name") and a button. On button click, combine the values and display the full name inside an <h1> element on the page.
function full_name(event) {
    event.preventDefault();
    const first = document.getElementById("n1").value;
    const last = document.getElementById("n2").value;
    document.getElementById("fullName").textContent = first + " " + last;
}