import {readFile} from "fs/promises"

const Readfile = async db => {
    try {
        const data = await readFile(db, "utf8")
        return JSON.stringify(data)
    } catch (error) {
        return {error}
    }
}

export default Readfile