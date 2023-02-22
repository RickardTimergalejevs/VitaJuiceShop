"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const userSchema = new mongoose_1.default.Schema({
    firstName: { type: String, required: true },
    phoneNumber: { type: Number, required: true },
    phoneAuthorizationCode: { type: String, requied: true, default: false }
});
const UserModel = mongoose_1.default.model("user", userSchema);
exports.default = UserModel;
