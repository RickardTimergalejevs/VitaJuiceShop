import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    firstName: { type: String, required: true },
    phoneNumber: { type: Number, required: true },
    birthDate: { type: String, default: null },
    email: { type: String, default: null },
    phoneAuthorizationCode: { type: Number, requied: true, default: false}
})

const UserModel = mongoose.model("user", userSchema)

export default UserModel