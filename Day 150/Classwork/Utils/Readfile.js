const { readFile } = require("fs/promises")

const Readfile = async DB => {
    try {
        return await JSON.parse(readFile(DB, "utf8"))
    } catch (error) {
        console.log({error})
    }
}

module.exports = Readfile

