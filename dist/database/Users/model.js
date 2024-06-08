"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserModel = exports.schema = exports.COLLECTION_NAME = exports.DOCUMENT_NAME = void 0;
const mongoose_1 = require("mongoose");
exports.DOCUMENT_NAME = "User";
exports.COLLECTION_NAME = "users";
exports.schema = new mongoose_1.Schema({
    name: {
        type: mongoose_1.Schema.Types.String,
        required: true,
    },
    email: {
        type: mongoose_1.Schema.Types.String,
        required: true,
    },
    password: {
        type: mongoose_1.Schema.Types.String,
        required: true,
        select: false,
    },
    createdAt: {
        type: mongoose_1.Schema.Types.Date,
        required: true,
        select: false,
    },
    updatedAt: {
        type: mongoose_1.Schema.Types.Date,
        required: true,
        select: false,
    },
}, {
    timestamps: true,
});
exports.UserModel = (0, mongoose_1.model)(exports.DOCUMENT_NAME, exports.schema, exports.COLLECTION_NAME);
//# sourceMappingURL=model.js.map