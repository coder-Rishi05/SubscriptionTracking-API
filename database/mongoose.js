import mongoose from "mongoose";

import { DB_URL, NODE_ENV } from "../config/env.js";

if (!DB_URL) {
  throw new Error(
    "Please define mongodb_url environment variable inside .env.<development/production>.local "
  );
}

// connect to mongodb.

const connectToDatabase = async () => {
  try {
    await mongoose.connect(DB_URL);
    console.log(`connect to database in ${NODE_ENV} mode`);
  } catch (err) {
    console.error("Error connecting to database : ", err);
    process.exit(1);
  }
};

export default connectToDatabase;
