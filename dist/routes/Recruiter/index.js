"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const repo_1 = __importDefault(require("../../database/Recruiter/repo"));
const express_1 = __importDefault(require("express"));
const asyncHandler_1 = __importDefault(require("../../helpers/asyncHandler"));
const authentication_1 = require("../../auth/authentication");
const repo_2 = __importDefault(require("../../database/Candidate/repo"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const authorization_1 = __importDefault(require("../../auth/authorization"));
const router = express_1.default.Router();
router.use(authorization_1.default);
router.post("/", (0, asyncHandler_1.default)(async (req, res) => {
    const user = { ...req.body };
    const findUser = await repo_1.default.findByName(user.name.toLowerCase());
    if (findUser) {
        return res.status(500).json({ message: "User already exist" });
    }
    const createUser = await repo_1.default.create(user);
    if (!createUser)
        return res.status(500).json({ message: "User could not be created" });
    return res.status(200).json({ message: "User successfully registered!" });
}));
router.post("/login", (0, asyncHandler_1.default)(async (req, res) => {
    const { name } = req.body;
    const user = await repo_1.default.findByName(name.toLowerCase());
    if (!user) {
        return res.status(500).json({ message: "User not found" });
    }
    const token = jsonwebtoken_1.default.sign({ id: user._id }, process.env.JWT_SECRET, {
        expiresIn: "1h",
    });
    if (!user) {
        return res.status(500).json({ message: "User not found" });
    }
    return res
        .status(200)
        .json({ message: "User successfully logged in!", token });
}));
router.put("/updateCampusCode", authentication_1.authentication, (0, asyncHandler_1.default)(async (req, res) => {
    var _a;
    const { campusCode } = req.body;
    const user = await repo_1.default.insertCampusCodes((_a = req.user) === null || _a === void 0 ? void 0 : _a._id, campusCode);
    if (!user) {
        return res.status(500).json({ message: "User not found" });
    }
    return res.status(200).json({ message: "User successfully updated!" });
}));
router.get("/findShortlistedCandidates/:campusCode", authentication_1.authentication, (0, asyncHandler_1.default)(async (req, res) => {
    const { campusCode } = req.params;
    const candidates = await repo_2.default.findCandidateByCampusCode(campusCode);
    if (!candidates) {
        return res.status(500).json({ message: "Candidates not found" });
    }
    return res.status(200).json({ candidates });
}));
exports.default = router;
//# sourceMappingURL=index.js.map