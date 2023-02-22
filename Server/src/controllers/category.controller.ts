import CategoryModel from "../models/category.model";
import { Request, Response } from "express"

const getCategoryById = async (req: Request, res: Response) => {
    try {
        const category = await CategoryModel.findById(req.params.id)
        if(!category) {
            res.status(404).json(`${req.params.id} not found`)
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
        const category = await CategoryModel.create(req.body)
        res.status(201).json(category)
    } catch(error) {
        res.status(400).json(error)
    }
}

export { getCategoryById, getCategories, createCategory }