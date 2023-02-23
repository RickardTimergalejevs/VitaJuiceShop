"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateUser = void 0;
const joi_1 = __importDefault(require("joi"));
const validateUser = joi_1.default.object({
    firstName: joi_1.default.string().min(1).max(1000).required(),
    phoneNumber: joi_1.default.number().min(1).max(100000000000).required()
});
exports.validateUser = validateUser;
