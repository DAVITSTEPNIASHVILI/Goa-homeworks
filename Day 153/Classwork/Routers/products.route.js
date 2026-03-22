import express from "express";
import {getProducts, addProduct, editProduct} from "../Controllers/products.controllers.js";

export const productRouter = express.Router()

productRouter.get("/", getProducts)
productRouter.post("/", addProduct)
productRouter.put("/:id", editProduct)