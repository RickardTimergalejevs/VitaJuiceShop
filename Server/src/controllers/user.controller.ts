import UserModel from "../models/user.model";
import { Request, Response } from "express"

const addUser = async (req: Request, res: Response) => {
    const user = await UserModel.create(req.body)
    res.status(201).json(user)
}

export { addUser }