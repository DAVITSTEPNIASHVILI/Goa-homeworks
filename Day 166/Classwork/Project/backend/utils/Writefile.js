import {writeFile} from "fs/promises"

const Writefile = async (db, data) => {
    try {
        await writeFile(db, JSON.stringify(data), "utf8")
        return "data saved successfully"
    } catch (error) {
        console.log(error)
    }
}

export default Writefile