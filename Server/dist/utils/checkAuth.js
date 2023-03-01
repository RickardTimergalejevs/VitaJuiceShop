"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.auth = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const auth = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    try {
        const token = (_a = req.header("authorization")) === null || _a === void 0 ? void 0 : _a.replace("Bearer ", "");
        if (token) {
            const decoded = jsonwebtoken_1.default.verify(token, "secret123");
            req.body.id = decoded;
        }
        else {
            return res.status(401).json("You are not authenticated");
        }
        next();
        /* const token = req.header("authorization")?.replace("Bearer ", "")

        if(!token) {
            throw new Error()
        }

        const decoded = jwt.verify(token, "secret123");
        (req as CustomRequest).token = decoded;

        getDocumentProperty(decoded, "_id")
 */
    }
    catch (error) {
        res.status(401).json("You are not authenticated");
    }
});
exports.auth = auth;
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
