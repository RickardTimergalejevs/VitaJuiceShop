import CategoryModel from "../models/category.model";
import { Request, Response } from "express"

const createCategory = async (req: Request, res: Response) => {
    try {
        const category = await CategoryModel.create(req.body)
        res.status(201).json(category)
    } catch(error) {
        res.status(400).json(error)
    }
}

export { createCategory }