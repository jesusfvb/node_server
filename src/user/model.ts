import {model, Schema} from "mongoose";

export type User = {
    name: string;
    password: string;
    username: string;
    email: string;
};

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
                ret.id = ret._id;
                delete ret._id;
            },
        },
    }
);

export default model<User>("User", UserSchema);
