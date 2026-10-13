import app from "../app.js";
import mongoose from "mongoose";

let connectionPromise;

async function connectDB() {
  if (mongoose.connection.readyState === 1) return;

  if (!connectionPromise) {
    connectionPromise = mongoose
      .connect(process.env.MONGODB_URI, {
        serverSelectionTimeoutMS: 10000,
      })
      .catch((error) => {
        connectionPromise = null;
        throw error;
      });
  }

  await connectionPromise;
}

export default async function handler(req, res) {
  try {
    await connectDB();
    return app(req, res);
  } catch (error) {
    console.error("DATABASE CONNECTION FAILED:", error);
    return res.status(500).json({
      success: false,
      message: "Backend database connection failed",
    });
  }
}