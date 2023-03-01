import jwt from "jsonwebtoken"
import { Request, Response, NextFunction } from "express"

export const auth = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const token = req.header("authorization")?.replace("Bearer ", "")

        if (token) {
            const decoded = jwt.verify(token, "secret123");

            req.body.id = decoded
            
        } else {
            return res.status(401).json("You are not authenticated")
        }
        next()
        
        /* const token = req.header("authorization")?.replace("Bearer ", "")

        if(!token) {
            throw new Error()
        }

        const decoded = jwt.verify(token, "secret123");
        (req as CustomRequest).token = decoded;

        getDocumentProperty(decoded, "_id")
 */
    } catch(error) {
        res.status(401).json("You are not authenticated")
    }
}

/* export function getDocumentProperty (object: any, idKey: string) {
    let result;
  
    if (object) {
      type MyObjectKey = keyof typeof object;
      const myId = idKey as MyObjectKey;
      result = object[myId];
    }
  
    return '' + result;
  } */

/* https://www.youtube.com/watch?v=GQ_pTmcXNrQ */

