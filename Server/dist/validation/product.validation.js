"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateProduct = void 0;
const joi_1 = __importDefault(require("joi"));
const validateProduct = joi_1.default.object({
    title: joi_1.default.string().min(1).max(1000).required(),
    image: joi_1.default.string().min(1).max(1000).required(),
    volume: joi_1.default.number().min(1).max(1000).required(),
    ingredients: {
        ingr1: joi_1.default.string().min(1).max(1000).required(),
        ingr2: joi_1.default.string().min(1).max(1000),
        ingr3: joi_1.default.string().min(1).max(1000),
        ingr4: joi_1.default.string().min(1).max(1000),
        ingr5: joi_1.default.string().min(1).max(1000),
    },
    nutritionalValue: {
        protein: joi_1.default.number().min(1).max(1000).required(),
        carbohydrates: joi_1.default.number().min(1).max(1000).required(),
        fat: joi_1.default.number().min(1).max(1000).required()
    },
    shelfLife: joi_1.default.number().min(1).max(1000).required(),
    storageConditions: joi_1.default.string().min(1).max(1000).required(),
    price: joi_1.default.number().min(1).max(1000).required(),
    category: joi_1.default.string().min(1).max(1000).required()
});
exports.validateProduct = validateProduct;
