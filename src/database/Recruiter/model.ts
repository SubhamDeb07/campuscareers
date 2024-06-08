import { Schema, model, Types } from "mongoose";

export const DOCUMENT_NAME = "Recruiter";
export const COLLECTION_NAME = "recruiters";

export default interface Recruiter {
  _id: Types.ObjectId;
  name: string;
  campusCodes: string[];
  createdAt?: Date;
  updatedAt?: Date;
}

const schema = new Schema<Recruiter>(
  {
    name: {
      type: Schema.Types.String,
      required: true,
    },
    campusCodes: {
      type: [Schema.Types.String],
    },
  },
  {
    timestamps: true,
  }
);

export const RecruiterModel = model<Recruiter>(
  DOCUMENT_NAME,
  schema,
  COLLECTION_NAME
);
