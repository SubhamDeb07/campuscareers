import Campus from "src/database/Campus/model";
import CampusRepo from "../../database/Campus/repo";
import express, { Request } from "express";
import asyncHandler from "../../helpers/asyncHandler";
import { authentication } from "../../auth/authentication";
import { AuthRequest } from "../../auth/authentication";
import jwt from "jsonwebtoken";
import { Types } from "mongoose";

const router = express.Router();

router.post(
  "/",
  authentication,
  asyncHandler(async (req: Request, res) => {
    const campus = { ...req.body } as Campus;
    const findCampus = await CampusRepo.findByCampusCode(campus.campusCode);

    if (findCampus) {
      return res.status(500).json({ message: "Campus already exist" });
    }
    const createCampus = await CampusRepo.create(campus);

    if (!createCampus)
      return res.status(500).json({ message: "Campus could not be created" });
    return res.status(200).json({ message: "Campus successfully registered!" });
  })
);

router.get(
  "/searchCampuses",
  authentication,
  asyncHandler(async (req: Request, res) => {
    const { searchQuery } = req.query;

    const campuses = await CampusRepo.searchCampuses(searchQuery as string, 5);

    if (!campuses)
      return res.status(500).json({ message: "Campuses could not be found" });

    return res.status(200).json({ campuses });
  })
);

export default router;
