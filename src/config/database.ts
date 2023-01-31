import mongoose from "mongoose";

export const initConnection = async () => {
    try {
        await mongoose.set("strictQuery", false);
        await mongoose.connect(process.env.MONGO_URL!!);
        console.log("Database connected");
    } catch (e) {
        console.log(e);
        throw new Error("Error to connected to database");
    }
};
