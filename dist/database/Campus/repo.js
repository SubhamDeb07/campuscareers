"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const model_1 = require("./model");
async function findById(id) {
    return model_1.CampusModel.findOne({ _id: id }).lean().exec();
}
async function create(user) {
    const now = new Date();
    user.createdAt = now;
    user.updatedAt = now;
    const created = await model_1.CampusModel.create(user);
    return created.toObject();
}
async function update(user) {
    user.updatedAt = new Date();
    return model_1.CampusModel.findByIdAndUpdate(user._id, user, { new: true })
        .lean()
        .exec();
}
async function findByEmail(email) {
    return model_1.CampusModel.findOne({ email: email });
}
async function findByCampusCode(code) {
    return model_1.CampusModel.findOne({ campusCode: code });
}
async function searchCampuses(query, limit) {
    const findObj = {};
    if (query.length > 0) {
        const startingLetters = query.slice(0, 4);
        const restOfQuery = query.slice(4);
        const regex = new RegExp(`^${startingLetters}${restOfQuery}`, "i");
        findObj["$or"] = [
            { name: { $regex: regex } },
            { campusCode: { $regex: regex } },
        ];
    }
    return model_1.CampusModel.find(findObj).limit(limit).lean().exec();
}
exports.default = {
    findById,
    create,
    update,
    findByEmail,
    findByCampusCode,
    searchCampuses,
};
//# sourceMappingURL=repo.js.map