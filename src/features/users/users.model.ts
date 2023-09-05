import { model, Schema, Document } from "mongoose";
import { IUser } from "../../interfaces/users.interface";

const userSchema: Schema = new Schema({
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
});

const userModel = model<IUser & Document>("User", userSchema);

export default userModel;
