import express from "express";
import { getAllBooks } from "../controllers/books.controllers.js";
import { getSingleBook } from "../controllers/books.controller.js";

const booksRouter = express.Router();

booksRouter.route("/")
    .get(getAllBooks)

booksRouter.route("/:id")
    .get(getSingleBook)

export default booksRouter;