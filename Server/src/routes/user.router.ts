import express from "express"
import { registerUser, loginUser, getCurrentUser } from "../controllers/user.controller";
import checkAuth from "../utils/checkAuth";

const userRouter = express.Router()

userRouter.post("/register", registerUser)
userRouter.post("/login", loginUser)
userRouter.get("/myProfile", checkAuth, getCurrentUser)

export { userRouter }