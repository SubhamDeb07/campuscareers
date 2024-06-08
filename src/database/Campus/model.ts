import { Types, Schema, model } from "mongoose";

export const DOCUMENT_NAME = "Campus";
export const COLLECTION_NAME = "campuses";

export default interface Campus {
  _id: Types.ObjectId;
  name: string;
  campusCode: string;
  createdAt?: Date;
  updatedAt?: Date;
}

export const schema = new Schema<Campus>(
  {
    name: {
      type: Schema.Types.String,
      required: true,
    },
    campusCode: {
      type: Schema.Types.String,
      default: null,
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

export const CampusModel = model<Campus>(
  DOCUMENT_NAME,
  schema,
  COLLECTION_NAME
);
