"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const repo_1 = __importDefault(require("../../database/Campus/repo"));
const express_1 = __importDefault(require("express"));
const asyncHandler_1 = __importDefault(require("../../helpers/asyncHandler"));
const authentication_1 = require("../../auth/authentication");
const router = express_1.default.Router();
router.post("/", authentication_1.authentication, (0, asyncHandler_1.default)(async (req, res) => {
    const campus = { ...req.body };
    const findCampus = await repo_1.default.findByCampusCode(campus.campusCode);
    if (findCampus) {
        return res.status(500).json({ message: "Campus already exist" });
    }
    const createCampus = await repo_1.default.create(campus);
    if (!createCampus)
        return res.status(500).json({ message: "Campus could not be created" });
    return res.status(200).json({ message: "Campus successfully registered!" });
}));
router.get("/searchCampuses", authentication_1.authentication, (0, asyncHandler_1.default)(async (req, res) => {
    const { searchQuery } = req.query;
    const campuses = await repo_1.default.searchCampuses(searchQuery, 5);
    if (!campuses)
        return res.status(500).json({ message: "Campuses could not be found" });
    return res.status(200).json({ campuses });
}));
exports.default = router;
//# sourceMappingURL=index.js.map