import jwt from "jsonwebtoken"
import { Request, Response, NextFunction } from "express"

export default (req: Request, res: Response, next: NextFunction) => {
    const token = req.headers.authorization

    if(token) {
        try {
            const decoded = jwt.verify(token, "secret123")

            /* req.userId = decoded._id */
            next()
        } catch(error) {
            return res.status(403).json("You are not authenticated")
        }
    } else {
         return res.status(403).json("You are not authenticated")
    }
}