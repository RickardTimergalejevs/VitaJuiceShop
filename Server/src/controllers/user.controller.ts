import UserModel from "../models/user.model";
import { Request, Response } from "express"
import { validateUser } from "../validation/user.validation";
import jwt from "jsonwebtoken"

const registerUser = async (req: Request, res: Response) => {
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

        const token = jwt.sign(
        {
            _id: user._id
        },
        "secret123",
        {
            expiresIn: "30d"
        }
        )
        res.status(201).json({user, token})
    } catch(error) {
        res.status(500).json(error)
    }
}
const loginUser = async (req: Request, res: Response) => {
    try {
        const user = await UserModel.findOne({ phoneNumber: req.body.phoneNumber })

        if(!user) {
            return res.status(401).json(`This phone number does not exist`)
        }

        if(user.phoneAuthorizationCode !== req.body.phoneAuthorizationCode) {
            return res.status(401).json(`Authorization code does not match`)
        }

        const token = jwt.sign(
            {
                _id: user._id
            },
            "secret123",
            {
                expiresIn: "30d"
            }
            )
        res.status(200).json({user, token})

    } catch(error) {
        res.status(500).json(error)
    }
}

const getCurrentUser = async (req: Request, res: Response) => {
    try {
        /* const user = await UserModel.findById(id)

        if(!user) {
            return res.status(404).json("User does not exist")
        }

        res.status(200).json(user) */
    } catch(error) {
        res.status(500).json(error)
    }
}

export { registerUser, loginUser, getCurrentUser }