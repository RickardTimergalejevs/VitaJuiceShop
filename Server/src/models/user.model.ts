import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    firstName: { type: String, required: true },
    phoneNumber: { type: Number, required: true },
    phoneAuthorizationCode: { type: String, requied: true, default: false}
})

const UserModel = mongoose.model("user", userSchema)

export default UserModel