// print("good morning") // it's js
const { readFile } = require("fs/promises")
const { createWriteStream, write } = require("fs")
const getData = async () => {
    try {
        const sentence = await readFile("./main.txt", "utf-8")
        console.log(sentence)
    } catch (error) {
        console.log(error)
    }
}

getData()

const getJson = async () => {
    try {
        const getjson = await readFile("json.json", "utf-8")
        console.log(JSON.parse(getjson))
    } catch (error) {
        console.log(error)
    }
}

getJson()

const writeStream = createWriteStream("./otherMain.txt")
writeStream.write("hello\n")
writeStream.write("This was made by David Stepniashvili")