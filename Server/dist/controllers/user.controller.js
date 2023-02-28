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
exports.getCurrentUser = exports.loginUser = exports.registerUser = void 0;
const user_model_1 = __importDefault(require("../models/user.model"));
const user_validation_1 = require("../validation/user.validation");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const registerUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
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
        const token = jsonwebtoken_1.default.sign({
            _id: user._id
        }, "secret123", {
            expiresIn: "30d"
        });
        res.status(201).json({ user, token });
    }
    catch (error) {
        res.status(500).json(error);
    }
});
exports.registerUser = registerUser;
const loginUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = yield user_model_1.default.findOne({ phoneNumber: req.body.phoneNumber });
        if (!user) {
            return res.status(401).json(`This phone number does not exist`);
        }
        if (user.phoneAuthorizationCode !== req.body.phoneAuthorizationCode) {
            return res.status(401).json(`Authorization code does not match`);
        }
        const token = jsonwebtoken_1.default.sign({
            _id: user._id
        }, "secret123", {
            expiresIn: "30d"
        });
        res.status(200).json({ user, token });
    }
    catch (error) {
        res.status(500).json(error);
    }
});
exports.loginUser = loginUser;
const getCurrentUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        /* const user = await UserModel.findById(id)

        if(!user) {
            return res.status(404).json("User does not exist")
        }

        res.status(200).json(user) */
    }
    catch (error) {
        res.status(500).json(error);
    }
});
exports.getCurrentUser = getCurrentUser;
