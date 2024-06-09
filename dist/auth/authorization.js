"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const Auth = (req, res, next) => {
    const apikey = req.headers["x-api-key"];
    if (!apikey) {
        return res.status(401).json({
            message: "API key is required",
        });
    }
    if (apikey !== process.env.API_KEY) {
        return res.status(403).json({
            message: "Invalid API key",
        });
    }
    next();
};
exports.default = Auth;
//# sourceMappingURL=authorization.js.map