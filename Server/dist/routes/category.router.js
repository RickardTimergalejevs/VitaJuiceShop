"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.categoryRouter = void 0;
const express_1 = __importDefault(require("express"));
const category_controller_1 = require("../controllers/category.controller");
const categoryRouter = express_1.default.Router();
exports.categoryRouter = categoryRouter;
categoryRouter.get("/:id", category_controller_1.getCategoryById);
categoryRouter.get("/", category_controller_1.getCategories);
categoryRouter.post("/", category_controller_1.createCategory);
