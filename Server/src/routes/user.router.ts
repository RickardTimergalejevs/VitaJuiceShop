import express from "express"
import { loginUser } from "../controllers/user.controller";

const userRouter = express.Router()

userRouter.post("/login", loginUser)

export { userRouter }