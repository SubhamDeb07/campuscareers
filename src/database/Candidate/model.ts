import { Types, Schema, model } from "mongoose";

export const DOCUMENT_NAME = "Candidate";
export const COLLECTION_NAME = "candidates";

export default interface Candidate {
  _id: Types.ObjectId;
  name: string;
  email: string;
  campusCode: string;
  isNew: boolean;
  createdAt?: Date;
  updatedAt?: Date;
}

export const schema = new Schema<Candidate>(
  {
    name: {
      type: Schema.Types.String,
      required: true,
    },
    email: {
      type: Schema.Types.String,
      required: true,
    },
    campusCode: {
      type: Schema.Types.String,
      default: null,
    },
    isNew: {
      type: Schema.Types.Boolean,
      default: false,
    },
    createdAt: {
      type: Schema.Types.Date,
      required: true,
      select: false,
    },
    updatedAt: {
      type: Schema.Types.Date,
      required: true,
      select: false,
    },
  },
  {
    timestamps: true,
  }
);

export const CandidateModel = model<Candidate>(
  DOCUMENT_NAME,
  schema,
  COLLECTION_NAME
);
