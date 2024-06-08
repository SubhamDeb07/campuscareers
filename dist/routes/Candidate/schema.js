"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const joi_1 = __importDefault(require("joi"));
exports.default = {
    sample: joi_1.default.object().keys({
        key: joi_1.default.string().required().min(1),
    }),
};
//# sourceMappingURL=schema.js.map