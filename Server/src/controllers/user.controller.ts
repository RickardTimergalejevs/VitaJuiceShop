import UserModel from "../models/user.model";
import { Request, Response } from "express"
import { validateUser } from "../validation/user.validation";

const loginUser = async (req: Request, res: Response) => {
    try {
        const { firstName, phoneNumber } = req.body

        const validate = await validateUser.validateAsync(req.body)
        const availableUser = await UserModel.findOne({ phoneNumber: validate.phoneNumber })
        if(availableUser) {
            return res.status(409).json(`Phone number ${validate.phoneNumber} is already in database`)
        }

        const generateCode = (min: number, max: number) => {
            min = Math.ceil(min)
            max = Math.floor(max)
            return Math.floor(Math.random() * (max - min) + min)
        }
        const user = await UserModel.create({ firstName, phoneNumber, phoneAuthorizationCode: generateCode(10000, 50000)})
        res.status(201).json(user)
    } catch(error) {
        res.status(400).json(error)
    }
}

export { loginUser }