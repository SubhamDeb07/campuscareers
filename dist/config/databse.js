"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const dbURI = "mongodb+srv://healthFlex:theoretical@test.9ti6kri.mongodb.net/?retryWrites=true&w=majority&appName=test";
const connectDB = async () => {
    try {
        await mongoose_1.default.connect(dbURI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("MongoDB connected successfully.");
    }
    catch (err) {
        console.error("MongoDB connection error:", err);
        process.exit(1);
    }
};
exports.default = connectDB;
//# sourceMappingURL=databse.js.map