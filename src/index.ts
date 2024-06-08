import express from "express";
import recruiter from "./routes/Recruiter";
import candidate from "./routes/Candidate";
import campus from "./routes/Campus";

const router = express.Router();

router.use("/recruiter", recruiter);
router.use("/candidate", candidate);
router.use("/campus", campus);

export default router;
