import {readFile} from "fs/promises";

const Readfile = async db => {
    try {
        const data = await readFile(db, "utf8");
        return JSON.parse(data);
    } catch(err) {
        return {err}
    }
};

export default Readfile