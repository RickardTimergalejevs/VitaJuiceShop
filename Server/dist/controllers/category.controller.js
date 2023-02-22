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
exports.updateCategory = exports.createCategory = exports.getCategories = exports.getCategoryById = void 0;
const category_model_1 = __importDefault(require("../models/category.model"));
const category_validation_1 = require("../validation/category.validation");
const getCategoryById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const category = yield category_model_1.default.findById(req.params.id);
        if (!category) {
            return res.status(404).json(`${req.params.id} not found`);
        }
        res.status(200).json(category);
    }
    catch (error) {
        res.status(400).json(error);
    }
});
exports.getCategoryById = getCategoryById;
const getCategories = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const categories = yield category_model_1.default.find({});
        res.status(200).json(categories);
    }
    catch (error) {
        res.status(400).json(error);
    }
});
exports.getCategories = getCategories;
const createCategory = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const validate = yield category_validation_1.validateCategory.validateAsync(req.body);
        const availableCategory = yield category_model_1.default.findOne({ title: validate.title });
        if (availableCategory) {
            return res.status(409).json(`Category ${validate.title} is already in database`);
        }
        const category = yield category_model_1.default.create(req.body);
        res.status(201).json(category);
    }
    catch (error) {
        res.status(400).json(error);
    }
});
exports.createCategory = createCategory;
const updateCategory = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield category_validation_1.validateCategory.validateAsync(req.body);
        const category = yield category_model_1.default.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!category) {
            return res.status(404).json(`${req.params.id} not found`);
        }
        res.status(200).json(category);
    }
    catch (error) {
        res.status(400).json(error);
    }
});
exports.updateCategory = updateCategory;
