import Candidate, { CandidateModel } from "./model";
import { Types } from "mongoose";

async function findById(id: Types.ObjectId): Promise<Candidate | null> {
  return CandidateModel.findOne({ _id: id }).lean().exec();
}

async function create(user: Candidate): Promise<Candidate> {
  const now = new Date();
  user.createdAt = now;
  user.updatedAt = now;
  const created = await CandidateModel.create(user);
  return created.toObject();
}

async function update(user: Candidate): Promise<Candidate | null> {
  user.updatedAt = new Date();
  return CandidateModel.findByIdAndUpdate(user._id, user, { new: true })
    .lean()
    .exec();
}

async function findByEmail(email: string) {
  return CandidateModel.findOne({ email: email });
}

async function assignCampusCode(user: Candidate) {
  return CandidateModel.findByIdAndUpdate(user._id, user, {});
}

async function findCandidateByCampusCode(code: string) {
  return CandidateModel.find({ campusCode: code });
}

export default {
  findById,
  create,
  update,
  findByEmail,
  assignCampusCode,
  findCandidateByCampusCode,
};
