"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const Recruiter_1 = __importDefault(require("./routes/Recruiter"));
const Candidate_1 = __importDefault(require("./routes/Candidate"));
const Campus_1 = __importDefault(require("./routes/Campus"));
const router = express_1.default.Router();
router.use("/recruiter", Recruiter_1.default);
router.use("/candidate", Candidate_1.default);
router.use("/campus", Campus_1.default);
exports.default = router;
//# sourceMappingURL=index.js.map