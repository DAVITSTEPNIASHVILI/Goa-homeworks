import express from "express";
import { addBook, deleteBook, editBook, getAllBooks, getSingleBook } from "../controllers/books.controller.js";
import { protect } from "../middlewares/auth.middleware.js";
import { allowedTo } from "../controllers/roles.controller.js";
import upload from "../config/multer.js";

export const booksRouter = express.Router();

booksRouter.route("/")
    .get(getAllBooks)
    .post(protect, allowedTo("admin"), upload.array("images", 4), addBook);

booksRouter.route("/:id")
    .get(getSingleBook)
    .put(protect, allowedTo("admin"), editBook)
    .delete(protect, allowedTo("admin"), deleteBook);

export default booksRouter;