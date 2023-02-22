import express from "express"
import { createCategory } from "../controllers/category.controller"

const categoryRouter = express.Router()

categoryRouter.post("/", createCategory)

export { categoryRouter }