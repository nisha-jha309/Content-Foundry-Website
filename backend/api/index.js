import app from "../app.js";
import mongoose from "mongoose"

let isConnected = false;

async function connectDB(){
    if(isConnected) return;
    try{
        const conn = await mongoose.connect(process.env.MONGODB_URI);
        isConnected = conn.connections[0].readyState;
        console.log ("MongoDB connected");
    }catch (error){
        console.error("MongoDb error :",error)
        throw error;
    }
}
export default async function handler(req,res){
    await connectDB();
    return app(req,res);
}
await connectDB();
export default app;