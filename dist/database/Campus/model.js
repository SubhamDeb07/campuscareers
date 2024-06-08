"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CampusModel = exports.schema = exports.COLLECTION_NAME = exports.DOCUMENT_NAME = void 0;
const mongoose_1 = require("mongoose");
exports.DOCUMENT_NAME = "Campus";
exports.COLLECTION_NAME = "campuses";
exports.schema = new mongoose_1.Schema({
    name: {
        type: mongoose_1.Schema.Types.String,
        required: true,
    },
    campusCode: {
        type: mongoose_1.Schema.Types.String,
        default: null,
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
exports.CampusModel = (0, mongoose_1.model)(exports.DOCUMENT_NAME, exports.schema, exports.COLLECTION_NAME);
//# sourceMappingURL=model.js.map