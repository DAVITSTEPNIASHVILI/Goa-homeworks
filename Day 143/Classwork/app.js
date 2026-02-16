const os = require("os")
const events = require("events")

const obj = {
    oparationSystem: os.type(),
    webs: os.networkInterfaces(),
    timeInSeconds: os.uptime(),
    timeInHours: os.uptime() / 3600
}

console.log(obj)

const log = userName => {
    console.log(userName)
}
const eventEmiter = new events.EventEmitter()

eventEmiter.on("log", log)
eventEmiter.emit("log", "David")