import express from "express"
import { getProductById, getAllProducts, createProduct } from "../controllers/product.controller"

const productRouter = express.Router()

productRouter.get("/:id", getProductById)
productRouter.get("/", getAllProducts)
productRouter.post("/", createProduct)

export { productRouter }