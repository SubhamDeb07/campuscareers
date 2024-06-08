"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = __importDefault(require("./index"));
const express_1 = __importDefault(require("express"));
require("./config/database");
const app = (0, express_1.default)();
app.use(express_1.default.json({ limit: "10mb" }));
app.use(express_1.default.urlencoded({ limit: "10mb", extended: true, parameterLimit: 50000 }));
const port = 3000;
app.use("/", index_1.default);
app.listen(port, () => {
    console.log("App is running");
});
//# sourceMappingURL=app.js.map