"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const model_1 = require("./model");
async function findById(id) {
    return model_1.CandidateModel.findOne({ _id: id }).lean().exec();
}
async function create(user) {
    const now = new Date();
    user.createdAt = now;
    user.updatedAt = now;
    const created = await model_1.CandidateModel.create(user);
    return created.toObject();
}
async function update(user) {
    user.updatedAt = new Date();
    return model_1.CandidateModel.findByIdAndUpdate(user._id, user, { new: true })
        .lean()
        .exec();
}
async function findByEmail(email) {
    return model_1.CandidateModel.findOne({ email: email });
}
exports.default = {
    findById,
    create,
    update,
    findByEmail,
};
//# sourceMappingURL=repo.js.map