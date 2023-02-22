"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importStar(require("mongoose"));
const deliveryAddress = {
    street: { type: String, requried: true },
    building: { type: Number, requried: true },
    entrance: { type: Number, required: true },
    floor: { type: Number, required: true },
    apartmentOrOffice: { type: Number, required: true },
    entryPhone: { type: Number, required: true },
    comment: { type: String }
};
const orderSchema = new mongoose_1.default.Schema({
    customer: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: "user",
        required: true
    },
    orderItems: [
        {
            product: {
                type: mongoose_1.Schema.Types.ObjectId,
                ref: "product",
                required: true
            },
            quantity: {
                type: Number,
                required: true
            },
            price: {
                type: Number,
                required: true
            }
        }
    ],
    giftCode: { type: String },
    freeBottle: { type: Number },
    orderPrice: { type: Number, required: true },
    deliveryAddress: { type: deliveryAddress, required: true }
});
const OrderModel = mongoose_1.default.model("order", orderSchema);
exports.default = OrderModel;
