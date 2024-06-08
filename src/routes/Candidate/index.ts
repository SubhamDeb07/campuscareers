import Candidate from "src/database/Candidate/model";
import CandidateRepo from "../../database/Candidate/repo";
import express from "express";
import asyncHandler from "../../helpers/asyncHandler";
import { AuthRequest } from "../../auth/authentication";
import CampusRepo from "../../database/Campus/repo";
import { authentication } from "../../auth/authenticateCand";
import jwt from "jsonwebtoken";
import { Types } from "mongoose";

const router = express.Router();

router.post(
  "/",
  asyncHandler(async (req, res) => {
    const user = { ...req.body } as Candidate;
    const findUser = await CandidateRepo.findByEmail(user.email.toLowerCase());

    if (findUser) {
      return res.status(500).json({ message: "User already exist" });
    }
    const createUser = await CandidateRepo.create(user);

    if (!createUser)
      return res.status(500).json({ message: "User could not be created" });
    return res.status(200).json({ message: "User successfully registered!" });
  })
);

router.post(
  "/login",
  asyncHandler(async (req, res) => {
    const { email } = req.body;
    const user = await CandidateRepo.findByEmail(email.toLowerCase());

    if (!user) {
      return res.status(500).json({ message: "User not found" });
    }

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET as string);

    return res
      .status(200)
      .json({ message: "User successfully logged in!", token });
  })
);

router.put(
  "/assignCampusCode",
  authentication,
  asyncHandler(async (req: AuthRequest, res) => {
    const campus = { ...req.body } as Candidate;
    const searchCampus = await CampusRepo.findByCampusCode(campus.campusCode);
    if (!searchCampus) {
      return res.status(500).json({ message: "Campus not found" });
    }
    const user = await CandidateRepo.assignCampusCode({
      _id: req.user?._id as Types.ObjectId,
      campusCode: campus.campusCode,
      isNew: true,
    } as Candidate);
    if (!user) {
      return res.status(500).json({ message: "User not found" });
    }
    return res
      .status(200)
      .json({ message: "Campus code assigned successfully!" });
  })
);

export default router;
