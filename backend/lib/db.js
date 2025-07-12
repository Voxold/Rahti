import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

export const connectDB = async () => {
    try {
        const MONGO_URI = process.env.MONGO_URI;

        if (!MONGO_URI) {
            throw new Error("MONGO_URI is not defined");
        }

        const conn = await mongoose.connect(MONGO_URI);
        console.log((`MongoDB connected: ${conn.connection.host}`));
    } catch (error) {
        console.log(`Error connecting to DB: ${error.message}`);
        process.exit(1); // Exit process
    }
};