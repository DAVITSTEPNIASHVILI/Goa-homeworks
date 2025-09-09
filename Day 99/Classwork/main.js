// საკლასო დავალება:

// Take an array of 5 names and join them with " | " between each name.
const names = ["David","Data","Gio","Nini","Petre"]
console.log(names.join(" | "))

// საკლასო დავალება:

// შექმენით Math.abs მეთოდის manual ფუნქცია.
const absManual = (a => {
    if (a < 0) {
        return a*-1
    }
    return a
})
console.log(absManual(5))
console.log(absManual(-5))


// საკლასო დავალება:

// Use Math.max() with negative numbers to see which is largest.
console.log(Math.max(-1,-2,-3,-4,-5,-6,-7,-10))