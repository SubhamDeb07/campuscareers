"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RecruiterModel = exports.COLLECTION_NAME = exports.DOCUMENT_NAME = void 0;
const mongoose_1 = require("mongoose");
exports.DOCUMENT_NAME = "Recruiter";
exports.COLLECTION_NAME = "recruiters";
const schema = new mongoose_1.Schema({
    name: {
        type: mongoose_1.Schema.Types.String,
        required: true,
    },
    campusCodes: {
        type: [mongoose_1.Schema.Types.String],
    },
}, {
    timestamps: true,
});
exports.RecruiterModel = (0, mongoose_1.model)(exports.DOCUMENT_NAME, schema, exports.COLLECTION_NAME);
//# sourceMappingURL=model.js.map