"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateProduct = exports.createProduct = exports.getAllProducts = exports.getProductById = void 0;
const product_model_1 = __importDefault(require("../models/product.model"));
const product_validation_1 = require("../validation/product.validation");
const getProductById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const product = yield product_model_1.default.findById(req.params.id);
        if (!product) {
            res.status(404).json(`${req.params.id} not found`);
        }
        res.status(200).json(product);
    }
    catch (error) {
        res.status(400).json(error);
    }
});
exports.getProductById = getProductById;
const getAllProducts = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const products = yield product_model_1.default.find({});
        res.status(200).json(products);
    }
    catch (error) {
        res.status(400).json(error);
    }
});
exports.getAllProducts = getAllProducts;
const createProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const validate = yield product_validation_1.validateProduct.validateAsync(req.body);
        const availableProduct = yield product_model_1.default.findOne({ title: validate.title });
        if (availableProduct) {
            return res.status(409).json(`Product ${validate.title} is already in database`);
        }
        const product = yield product_model_1.default.create(req.body);
        res.status(201).json(product);
    }
    catch (error) {
        res.status(400).json(error);
    }
});
exports.createProduct = createProduct;
const updateProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield product_validation_1.validateProduct.validateAsync(req.body);
        const product = yield product_model_1.default.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!product) {
            return res.status(404).json(`${req.params.id} not found`);
        }
        res.status(200).json(product);
    }
    catch (error) {
        res.status(400).json(error);
    }
});
exports.updateProduct = updateProduct;
