"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateCategory = void 0;
const joi_1 = __importDefault(require("joi"));
const validateCategory = joi_1.default.object({
    title: joi_1.default.string().min(1).max(1000).required().messages({
        "any.required": "Title field is required!",
        "string.empty": "Title cannot be an empty field",
        "string.base": "Title should be a type of text",
        "string.min": "Minimum field length 1 characher",
        "string.max": "Maximum field length 1000 characters"
    }),
    image: joi_1.default.string().min(1).max(1000).required().messages({
        "any.required": "Image field is required!",
        "string.empty": "Image cannot be an empty field",
        "string.base": "Image should be a type of URL",
        "string.min": "Minimum field length 1 characher",
        "string.max": "Maximum field length 1000 characters"
    }),
    description: joi_1.default.string().min(1).max(1000).required().messages({
        "any.required": "Description field is required!",
        "string.empty": "Description cannot be an empty field",
        "string.base": "Description should be a type of text",
        "string.min": "Minimum field length 1 characher",
        "string.max": "Maximum field length 1000 characters"
    })
});
exports.validateCategory = validateCategory;
