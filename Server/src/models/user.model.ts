import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true }
})

const UserModel = mongoose.model("user", userSchema)

export default UserModel