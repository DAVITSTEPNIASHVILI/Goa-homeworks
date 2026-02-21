const { createWriteStream } = require("fs")

const create = () => {
    const myWriteStreamer = createWriteStream("text.txt")
    myWriteStreamer.write("First line")
    myWriteStreamer.end()
}
create()