import dotenv from "dotenv";
import express from "express";

import authRoutes from "./routes/authRoutes.js"
import ConnectToMongoDB from "./db/ConnectToMongoDB.js";

const app = express();
const PORT = process.env.PORT || 4000;

dotenv.config();

app.use(express.json());  //to parse the incoming requests with JSON payloads (from req.body)

app.use("/api/auth", authRoutes);

app.listen(PORT, () => {
    console.log(`Server runnung on port ${PORT}`)
    ConnectToMongoDB();
});