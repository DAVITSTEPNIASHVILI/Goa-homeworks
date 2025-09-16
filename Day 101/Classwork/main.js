console.log(Date())
console.log(new Date())


const dayobj = ["კვირა","ორშაბათი","სამშაბათი","ოთხშაბათი","ხუთშაბათი","პარასკევი","შაბათი"]
console.log(dayobj[new Date().getDay()])

let count = 0
const time = setInterval(() => {
    count ++
    console.log(`${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()}`)
    if (count === 10) {
        clearInterval(time)
    }
}, 1000)