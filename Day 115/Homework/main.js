// // 1)

// // Render a <p> tag that says “Admin Panel” if userRole equals "admin", otherwise show “User Dashboard.”
// const p = document.getElementById("p1");
// p.textContent = p.textContent === "admin" ? "Admin Panel" : "User Dashboard";
// // 2)

// // Show a product’s price if isAvailable is true; otherwise display “Out of stock.”
// const product = {
//     price : 29.99,
//     isAvailable : true
// };
// console.log(product.isAvailable === true ? product.price : "Out of stock");
// // 3)

// // Conditionally render either an image of a sun or a moon based on isDaytime.
// const sun = "./sun.png";
// const moon = "./moon.png";
// const container = document.body;
// console.log(new Date().getHours() > 18 ? (container.style.backgroundImage = `url(${moon})`): (container.style.backgroundImage = `url(${sun})`)
// );
// 4)

// // Display “New Notification” only if hasNotification is true.
// const hasNotification = true;
// const p = <p>{hasNotification === true && "New Notification"}</p> 
// 5)

// // Render a <p> with the user’s email only if email exists.
// const email = {emailExists: true}
// const p = <p>{email.emailExists === true && "exaple@gmail.com"}</p>
// 6)

// Show “Discount Available!” if discount > 0.
// const discount = 30
// console.log(<p>{discount > 0 && "Discount Available!"}</p>)