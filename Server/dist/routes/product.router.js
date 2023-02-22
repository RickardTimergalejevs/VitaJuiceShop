"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.productRouter = void 0;
const express_1 = __importDefault(require("express"));
const product_controller_1 = require("../controllers/product.controller");
const productRouter = express_1.default.Router();
exports.productRouter = productRouter;
productRouter.get("/:id", product_controller_1.getProductById);
productRouter.get("/", product_controller_1.getAllProducts);
productRouter.post("/", product_controller_1.createProduct);
