import { Request, Response, NextFunction } from "express";
import dotenv from "dotenv";

dotenv.config();

const Auth = (
  req: Request,
  res: Response,
  next: NextFunction
): Response | void => {
  const apikey = req.headers["x-api-key"] as string;

  if (!apikey) {
    return res.status(401).json({
      message: "API key is required",
    });
  }

  if (apikey !== process.env.API_KEY) {
    return res.status(403).json({
      message: "Invalid API key",
    });
  }

  next();
};

export default Auth;
