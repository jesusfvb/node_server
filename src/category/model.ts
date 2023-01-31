import {model, Schema} from "mongoose";

export type Category = {
    name: string;
    usuario: Schema.Types.ObjectId;
};

const CategorySchema = new Schema<Category>({
    name: {
        type: String,
        unique: true
    },
    usuario: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
}, {
    toJSON: {
        transform: (doc, ret) => {
            ret.id = ret._id
            delete ret._id
            delete ret.__v
        }
    }
});

export default model<Category>("Category", CategorySchema);
