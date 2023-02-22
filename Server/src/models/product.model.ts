import mongoose, { Schema } from "mongoose";

const productSchema = new mongoose.Schema({
    title: { type: String, required: true },
    image: { type: String, required: true },
    volume: { type: Number, required: true },
    ingredients: { 
        ingr1: { type: String, required: true },
        ingr2: { type: String },
        ingr3: { type: String },
        ingr4: { type: String },
        ingr5: { type: String },
    },
    nutritionalValue: {
        protein: { type: Number, required: true },
        carbohydrates: { type: Number, required: true },
        fat: { type: Number, required: true}
    },
    shelfLife: { type: Number, required: true },
    storageConditions: { type: String, requried: true },
    price: { type: Number, required: true },
    category: { 
        type: Schema.Types.ObjectId, 
        ref: "category", 
        required: true 
    }
})

const ProductModel = mongoose.model("product", productSchema)

export default ProductModel