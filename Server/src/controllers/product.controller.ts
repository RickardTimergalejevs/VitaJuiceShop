import ProductModel from "../models/product.model";
import { Request, Response } from "express"
import { validateProduct } from "../validation/product.validation";

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

const getProductByCategory = async (req: Request, res: Response) => {
    try {
        const products = await ProductModel.find({ category: req.params.id })
        if(!products) {
            res.status(404).json(`${req.params.id} not found`)
        }

        res.status(200).json(products)
    } catch(error) {
        res.status(400).json(error)
    }
}

const createProduct = async (req: Request, res: Response) => {
    try {
        const validate = await validateProduct.validateAsync(req.body)
        const availableProduct = await ProductModel.findOne({ title: validate.title })
        if(availableProduct) {
            return res.status(409).json(`Product ${validate.title} is already in database`)
        }

        const product = await ProductModel.create(req.body)
        res.status(201).json(product)
    } catch(error) {
        res.status(400).json(error)
    }
}

const updateProduct = async (req: Request, res: Response) => {
    try {
        await validateProduct.validateAsync(req.body)

        const product = await ProductModel.findByIdAndUpdate(req.params.id, req.body, { new: true })
        if(!product) {
            return res.status(404).json(`${req.params.id} not found`)
        }
        res.status(200).json(product)
    } catch(error) {
        res.status(400).json(error)
    }
}

export { getProductById, getAllProducts, getProductByCategory, createProduct, updateProduct }