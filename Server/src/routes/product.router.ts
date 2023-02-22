import express from "express"
import { getProductById, getAllProducts, createProduct, updateProduct } from "../controllers/product.controller"

const productRouter = express.Router()

productRouter.get("/:id", getProductById)
productRouter.get("/", getAllProducts)
productRouter.post("/", createProduct)
productRouter.put("/:id", updateProduct)

export { productRouter }