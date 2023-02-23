"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const cors_1 = __importDefault(require("cors"));
const user_router_1 = require("./routes/user.router");
const product_router_1 = require("./routes/product.router");
const category_router_1 = require("./routes/category.router");
const app = (0, express_1.default)();
//Middlewares
app.use(express_1.default.json());
app.use((0, cors_1.default)());
//Routes
app.use("/api/users", user_router_1.userRouter);
app.use("/api/products", product_router_1.productRouter);
app.use("/api/categories", category_router_1.categoryRouter);
//Init app / Connect to DB
const initApp = () => {
    mongoose_1.default.set('strictQuery', true);
    mongoose_1.default.connect("mongodb://127.0.0.1:27017/vitajuice")
        .then(() => console.log("Connected to DB"))
        .catch(() => console.log("Nope"));
    app.listen(3000, () => console.log("Server is up and running"));
};
initApp();
