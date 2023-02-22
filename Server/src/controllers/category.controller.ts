import CategoryModel from "../models/category.model";
import { Request, Response } from "express"
import { validateCategory } from "../validation/category.validation";

const getCategoryById = async (req: Request, res: Response) => {
    try {
        const category = await CategoryModel.findById(req.params.id)
        if(!category) {
            return res.status(404).json(`${req.params.id} not found`)
        }
        res.status(200).json(category)
    } catch(error) {
        res.status(400).json(error)
    }
}

const getCategories = async (req: Request, res: Response) => {
    try {
        const categories = await CategoryModel.find({})
        res.status(200).json(categories)
    } catch(error) {
        res.status(400).json(error)
    }
}

const createCategory = async (req: Request, res: Response) => {
    try {
        const validate = await validateCategory.validateAsync(req.body)
        const availableCategory = await CategoryModel.findOne({ title: validate.title })
        if(availableCategory) {
            return res.status(409).json(`Category ${validate.title} is already in database`)
        }

        const category = await CategoryModel.create(req.body)
        res.status(201).json(category)
    } catch(error) {
        res.status(400).json(error)
    }
}

const updateCategory = async (req: Request, res: Response) => {
    try {
        await validateCategory.validateAsync(req.body)

        const category = await CategoryModel.findByIdAndUpdate(req.params.id, req.body, { new: true })
        if(!category) {
            return res.status(404).json(`${req.params.id} not found`)
        }
        res.status(200).json(category)
    } catch(error) {
        res.status(400).json(error)
    }
}

export { getCategoryById, getCategories, createCategory, updateCategory }