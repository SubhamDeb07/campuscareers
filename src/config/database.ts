import mongoose from "mongoose";
import { ConnectOptions } from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const MONGODB_URI = process.env.MongoUrl as string;

mongoose
  .connect(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  } as ConnectOptions)
  .then(() => console.log("MongoDB connected"))
  .catch((error) => console.error("MongoDB connection error:", error));

export default mongoose;
