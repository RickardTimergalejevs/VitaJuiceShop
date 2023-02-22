import ProductModel from "../models/product.model";
import { Request, Response } from "express"

const getProductById = async (req: Request, res: Response) => {
    try {
        const product = await ProductModel.findById(req.params.id)
        if(!product) {
            res.status(404).json(`${req.params.id} not found`)
        }
        res.status(200).json(product)
    } catch(error) {
        res.status(400).json(error)
    }
}

const getAllProducts = async (req: Request, res: Response) => {
    try {
        const products = await ProductModel.find({})
        res.status(200).json(products)
    } catch(error) {
        res.status(400).json(error)
    }
}

const createProduct = async (req: Request, res: Response) => {
    try {
        const product = await ProductModel.create(req.body)
        res.status(201).json(product)
    } catch(error) {
        res.status(400).json(error)
    }
}

export { getProductById, getAllProducts, createProduct }