import express from "express"
import { getCategoryById, getCategories, createCategory, updateCategory } from "../controllers/category.controller"

const categoryRouter = express.Router()

categoryRouter.get("/:id", getCategoryById)
categoryRouter.get("/", getCategories)
categoryRouter.post("/", createCategory)
categoryRouter.put("/:id", updateCategory)

export { categoryRouter }