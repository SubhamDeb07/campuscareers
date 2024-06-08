import Campus, { CampusModel } from "./model";
import { Types } from "mongoose";

async function findById(id: Types.ObjectId): Promise<Campus | null> {
  return CampusModel.findOne({ _id: id }).lean().exec();
}

async function create(user: Campus): Promise<Campus> {
  const now = new Date();
  user.createdAt = now;
  user.updatedAt = now;
  const created = await CampusModel.create(user);
  return created.toObject();
}

async function update(user: Campus): Promise<Campus | null> {
  user.updatedAt = new Date();
  return CampusModel.findByIdAndUpdate(user._id, user, { new: true })
    .lean()
    .exec();
}

async function findByEmail(email: string) {
  return CampusModel.findOne({ email: email });
}

async function findByCampusCode(code: string) {
  return CampusModel.findOne({ campusCode: code });
}

async function searchCampuses(query: string, limit: number): Promise<Campus[]> {
  const findObj: any = {};
  if (query.length > 0) {
    const startingLetters = query.slice(0, 4);
    const restOfQuery = query.slice(4);
    const regex = new RegExp(`^${startingLetters}${restOfQuery}`, "i");
    findObj["$or"] = [
      { name: { $regex: regex } },
      { campusCode: { $regex: regex } },
    ];
  }
  return CampusModel.find(findObj).limit(limit).lean().exec();
}

export default {
  findById,
  create,
  update,
  findByEmail,
  findByCampusCode,
  searchCampuses,
};
