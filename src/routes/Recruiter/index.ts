import Recruiter from "src/database/Recruiter/model";
import RecruiterRepo from "../../database/Recruiter/repo";
import express, { Request } from "express";
import asyncHandler from "../../helpers/asyncHandler";
import { authentication } from "../../auth/authentication";
import { AuthRequest } from "../../auth/authentication";
import CandidateRepo from "../../database/Candidate/repo";
import jwt from "jsonwebtoken";
import { Types } from "mongoose";

const router = express.Router();

router.post(
  "/",
  asyncHandler(async (req: Request, res) => {
    const user = { ...req.body } as Recruiter;
    const findUser = await RecruiterRepo.findByName(user.name.toLowerCase());

    if (findUser) {
      return res.status(500).json({ message: "User already exist" });
    }
    const createUser = await RecruiterRepo.create(user);

    if (!createUser)
      return res.status(500).json({ message: "User could not be created" });
    return res.status(200).json({ message: "User successfully registered!" });
  })
);

router.post(
  "/login",
  asyncHandler(async (req: Request, res) => {
    const { name } = req.body;
    const user = await RecruiterRepo.findByName(name.toLowerCase());

    if (!user) {
      return res.status(500).json({ message: "User not found" });
    }

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET as string, {
      expiresIn: "1h",
    });
    if (!user) {
      return res.status(500).json({ message: "User not found" });
    }
    return res
      .status(200)
      .json({ message: "User successfully logged in!", token });
  })
);

router.put(
  "/updateCampusCode",
  authentication,
  asyncHandler(async (req: AuthRequest, res) => {
    const { campusCode } = req.body;
    const user = await RecruiterRepo.insertCampusCodes(
      req.user?._id as Types.ObjectId,
      campusCode
    );
    if (!user) {
      return res.status(500).json({ message: "User not found" });
    }
    return res.status(200).json({ message: "User successfully updated!" });
  })
);

router.get(
  "/findShortlistedCandidates/:campusCode",
  authentication,
  asyncHandler(async (req: AuthRequest, res) => {
    const { campusCode } = req.params;
    const candidates = await CandidateRepo.findCandidateByCampusCode(
      campusCode as string
    );
    if (!candidates) {
      return res.status(500).json({ message: "Candidates not found" });
    }
    return res.status(200).json({ candidates });
  })
);

export default router;
