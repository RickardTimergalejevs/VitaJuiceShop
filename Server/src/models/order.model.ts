import mongoose, { Schema } from "mongoose";

const deliveryAddress = {
    street: { type: String, requried: true },
    building: { type: Number, requried: true },
    entrance: { type: Number, required: true },
    floor: { type: Number, required: true},
    apartmentOrOffice: { type: Number, required: true},
    entryPhone: { type: Number, required: true },
    comment: { type: String }
}

const orderSchema = new mongoose.Schema({
    customer: {
        type: Schema.Types.ObjectId,
        ref: "user",
        required: true
    },
    orderItems: [
        {
            product: {
                type: Schema.Types.ObjectId,
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
})

const OrderModel = mongoose.model("order", orderSchema)

export default OrderModel