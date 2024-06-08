import { Request, Response, NextFunction } from "express";
import jwt, { JwtPayload } from "jsonwebtoken";
import dotenv from "dotenv";
import RecruiterRepo from "../database/Recruiter/repo";
import { Types } from "mongoose";

dotenv.config();

export interface AuthRequest extends Request {
  user?: {
    _id: Types.ObjectId;
  };
}

export const authentication = async (
  req: AuthRequest,
  res: Response,
  next: NextFunction
) => {
  const token =
    req.headers.authorization && req.headers.authorization.split(" ")[1];
  if (!token) {
    return res.status(401).json({ message: "No token provided" });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET as string);
    if (!decoded) {
      return res.status(401).json({ message: "Token is not valid" });
    }

    const user = await RecruiterRepo.findById(
      (decoded as JwtPayload).id as Types.ObjectId
    );

    if (!user) {
      return res.status(401).json({ message: "User not found" });
    }

    req.user = user;

    next();
  } catch (err) {
    res.status(401).json({ message: "Token is not valid" });
  }
};
