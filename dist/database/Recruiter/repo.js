"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const model_1 = require("./model");
async function findById(id) {
    return model_1.RecruiterModel.findOne({ _id: id }).lean().exec();
}
async function create(user) {
    const now = new Date();
    user.createdAt = now;
    user.updatedAt = now;
    user.name = user.name.toLowerCase();
    const created = await model_1.RecruiterModel.create(user);
    return created.toObject();
}
async function update(user) {
    user.updatedAt = new Date();
    return model_1.RecruiterModel.findByIdAndUpdate(user._id, user, { new: true })
        .lean()
        .exec();
}
async function findByName(name) {
    return model_1.RecruiterModel.findOne({ name: name });
}
async function insertCampusCodes(id, campusCode) {
    return model_1.RecruiterModel.findByIdAndUpdate(id, { $push: { campusCodes: campusCode } }, { new: true });
}
exports.default = {
    findById,
    create,
    update,
    findByName,
    insertCampusCodes,
};
//# sourceMappingURL=repo.js.map