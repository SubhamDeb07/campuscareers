"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const repo_1 = __importDefault(require("../../database/Candidate/repo"));
const express_1 = __importDefault(require("express"));
const asyncHandler_1 = __importDefault(require("../../helpers/asyncHandler"));
const repo_2 = __importDefault(require("../../database/Campus/repo"));
const authenticateCand_1 = require("../../auth/authenticateCand");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
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
router.post("/login", (0, asyncHandler_1.default)(async (req, res) => {
    const { email } = req.body;
    const user = await repo_1.default.findByEmail(email.toLowerCase());
    if (!user) {
        return res.status(500).json({ message: "User not found" });
    }
    const token = jsonwebtoken_1.default.sign({ id: user._id }, process.env.JWT_SECRET);
    return res
        .status(200)
        .json({ message: "User successfully logged in!", token });
}));
router.put("/assignCampusCode", authenticateCand_1.authentication, (0, asyncHandler_1.default)(async (req, res) => {
    var _a;
    const campus = { ...req.body };
    const searchCampus = await repo_2.default.findByCampusCode(campus.campusCode);
    if (!searchCampus) {
        return res.status(500).json({ message: "Campus not found" });
    }
    const user = await repo_1.default.assignCampusCode({
        _id: (_a = req.user) === null || _a === void 0 ? void 0 : _a._id,
        campusCode: campus.campusCode,
        isNew: true,
    });
    if (!user) {
        return res.status(500).json({ message: "User not found" });
    }
    return res
        .status(200)
        .json({ message: "Campus code assigned successfully!" });
}));
exports.default = router;
//# sourceMappingURL=index.js.map