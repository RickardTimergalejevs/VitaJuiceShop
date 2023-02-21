"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const app = (0, express_1.default)();
//Middlewares
app.use(express_1.default.json());
//Routes
//Init app / Connect to DB
const initApp = () => {
    mongoose_1.default.set('strictQuery', true);
    mongoose_1.default.connect("mongodb:localhost:27017/vitajuice")
        .then(() => console.log("Connected to DB"))
        .catch(() => console.log("Nope"));
    app.listen(3000, () => console.log("Server is up and running"));
};
initApp();
