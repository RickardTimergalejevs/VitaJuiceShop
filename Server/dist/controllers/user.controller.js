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
exports.loginUser = void 0;
const user_model_1 = __importDefault(require("../models/user.model"));
const user_validation_1 = require("../validation/user.validation");
const loginUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { firstName, phoneNumber } = req.body;
        const validate = yield user_validation_1.validateUser.validateAsync(req.body);
        const availableUser = yield user_model_1.default.findOne({ phoneNumber: validate.phoneNumber });
        if (availableUser) {
            return res.status(409).json(`Phone number ${validate.phoneNumber} is already in database`);
        }
        const generateCode = (min, max) => {
            min = Math.ceil(min);
            max = Math.floor(max);
            return Math.floor(Math.random() * (max - min) + min);
        };
        const user = yield user_model_1.default.create({ firstName, phoneNumber, phoneAuthorizationCode: generateCode(10000, 50000) });
        res.status(201).json(user);
    }
    catch (error) {
        res.status(400).json(error);
    }
});
exports.loginUser = loginUser;
