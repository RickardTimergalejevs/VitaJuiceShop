import express from "express"
import { registerUser, loginUser, getCurrentUser } from "../controllers/user.controller";
import { auth } from "../utils/checkAuth";

const userRouter = express.Router()

userRouter.post("/register", registerUser)
userRouter.post("/login", loginUser)
userRouter.get("/myProfile", auth, getCurrentUser)

export { userRouter }