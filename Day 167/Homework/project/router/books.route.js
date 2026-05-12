import express from "express";
import { getAllBooks, getSingleBook, deleteBook, addBook} from "../controllers/books.controllers.js";

const booksRouter = express.Router();

booksRouter.route("/")
    .get(getAllBooks)
    .post(addBook)

booksRouter.route("/:id")
    .get(getSingleBook)
    .delete(deleteBook)
    

export default booksRouter;