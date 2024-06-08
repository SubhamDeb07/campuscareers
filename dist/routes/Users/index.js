"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const repo_1 = __importDefault(require("../../database/Candidate/repo"));
const express_1 = __importDefault(require("express"));
const asyncHandler_1 = __importDefault(require("../../helpers/asyncHandler"));
const router = express_1.default.Router();
router.post("/", (0, asyncHandler_1.default)(async (req, res) => {
    const user = { ...req.body };
    const findUser = await repo_1.default.findByEmail(user.email.toLowerCase());
    if (findUser) {
        return res.status(500).json({ message: "User already exist" });
    }
    const createUser = await repo_1.default.create(user);
    if (!createUser)
        return res.status(500).json({ message: "User could not be created" });
    return res.status(200).json({ message: "User successfully registered!" });
}));
exports.default = router;
//# sourceMappingURL=index.js.map