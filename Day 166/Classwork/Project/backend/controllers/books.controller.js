import Readfile from "../utils/Readfile.js";
import Writefile from "../utils/Writefile.js";

const getAllBooks = async (req, res) => {
    const allBooks = await Readfile(process.env.DB)

    if (allBooks.length === 0) {
        res.status(400).send("No books available!")
    }

    res.status(200).json(allBooks)
}