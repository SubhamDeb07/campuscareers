import Recruiter, { RecruiterModel } from "./model";
import { Types } from "mongoose";

async function findById(id: Types.ObjectId): Promise<Recruiter | null> {
  return RecruiterModel.findOne({ _id: id }).lean().exec();
}

async function create(user: Recruiter): Promise<Recruiter> {
  const now = new Date();
  user.createdAt = now;
  user.updatedAt = now;
  user.name = user.name.toLowerCase();
  const created = await RecruiterModel.create(user);
  return created.toObject();
}

async function update(user: Recruiter): Promise<Recruiter | null> {
  user.updatedAt = new Date();
  return RecruiterModel.findByIdAndUpdate(user._id, user, { new: true })
    .lean()
    .exec();
}

async function findByName(name: string) {
  return RecruiterModel.findOne({ name: name });
}

async function insertCampusCodes(id: Types.ObjectId, campusCode: string) {
  return RecruiterModel.findByIdAndUpdate(
    id,
    { $push: { campusCodes: campusCode } },
    { new: true }
  );
}

export default {
  findById,
  create,
  update,
  findByName,
  insertCampusCodes,
};
