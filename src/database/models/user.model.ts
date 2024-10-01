import mongoose, { Schema, Document } from "mongoose";

export interface IUser extends Document {
  id: string;
  name: string;
  lastName: string;
  email: string;
  password: string;
  // avatar_url: string;
  // password_enabled: boolean;
  // external_account: boolean;
}

const userSchema = new Schema<IUser>({
  id: {
    type: String,
    unique: true,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    default: "",
  },
  email: {
    type: String,
    unique: true,
    required: true,
  },
  password: {
    type: String,
    default: "",
  },
  // avatar_url: {
  //   type: String,
  //   default: "",
  // },
  // password_enabled: {
  //   type: Boolean,
  //   default: false,
  // },
  // external_account: {
  //   type: Boolean,
  //   default: false,
  // },
});

export const UserModel =
  mongoose.models.User ?? mongoose.model<IUser>("User", userSchema);
