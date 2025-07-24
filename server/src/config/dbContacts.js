import mongoose from "mongoose";
import 'dotenv/config';

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Connected to MongoDB database");
  } catch (error) {
    console.error('Database connection error:', error);
    process.exit(1);   
  }
};

export default connectDB;
