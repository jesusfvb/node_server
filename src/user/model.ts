import { model, Schema } from "mongoose";

export interface User {
  name: string;
  password: string;
  username: string;
  email: string;
}

const UserSchema = new Schema<User>(
  {
    name: {
      type: String,
    },
    password: {
      type: String,
    },
    username: {
      type: String,
      required: [true, "Username is required"],
      unique: true,
    },
    email: {
      type: String,
      unique: true,
    },
  },
  {
    toJSON: {
      transform: function (doc, ret) {
        delete ret.password;
        delete ret.__v;
      },
    },
  }
);

export default model<User>("User", UserSchema);
