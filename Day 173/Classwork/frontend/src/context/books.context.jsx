import { useEffect, useState, createContext} from "react";


const BooksContext = createContext()

const BooksProvider = () => {
    const [books, setBooks] = useState()

    const getBooks = async () => {
        const res = await fetch(`${import.meta.env.API_URL}/api`)

        if (!res.ok) {
            throw new Error("Something went wrong!")
        }

        setBooks(res)
    }
    useEffect(() => {
            console.log(books)
    }, [])
}