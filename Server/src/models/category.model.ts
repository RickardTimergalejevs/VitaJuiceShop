import mongoose from "mongoose"

const categorySchema = new mongoose.Schema({
    title: { type: String, required: true},
    image: { type: String, required: true},
    description: { type: String, required: true }
})

const CategoryModel = mongoose.model("category", categorySchema)

export default CategoryModel