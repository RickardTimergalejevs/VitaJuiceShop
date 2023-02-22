import ProductModel from "../models/product.model";
import { Request, Response } from "express"

const createProduct = async (req: Request, res: Response) => {
    try {
        const product = await ProductModel.create(req.body)
        res.status(201).json(product)
    } catch(error) {
        res.status(400).json(error)
    }
}

export { createProduct }