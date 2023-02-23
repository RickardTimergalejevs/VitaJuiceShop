import express from "express"
import { getProductById, getAllProducts, getProductByCategory, createProduct, updateProduct } from "../controllers/product.controller"

const productRouter = express.Router()

productRouter.get("/:id", getProductById)
productRouter.get("/", getAllProducts)
productRouter.get("/category/:id", getProductByCategory)

productRouter.post("/", createProduct)
productRouter.put("/:id", updateProduct)

export { productRouter }