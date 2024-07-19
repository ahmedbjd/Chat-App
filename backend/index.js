import dotenv from "dotenv";
import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import path from "path";

import authRoutes from "./routes/authRoutes.js"
import ConnectToMongoDB from "./db/ConnectToMongoDB.js";
import messageRoutes from "./routes/messageRoutes.js";
import usersRoutes from "./routes/usersRoutes.js";
import { app, server } from "./socket/socket.js";

const PORT = process.env.PORT || 4000;

const __dirname = path.resolve();

dotenv.config();

app.use(cors());
app.use(express.json());  //to parse the incoming requests with JSON payloads (from req.body)
app.use(cookieParser());  //It is used to parse cookies attached to the client request object. This allows you to easily access cookie values and manage cookies

app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);
app.use("/api/users", usersRoutes);

app.use(express.static(path.join(__dirname, "../frontend/dist")));

app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../frontend/dist", "index.html"));
})

server.listen(PORT, () => {
    console.log(`Server runnung on port ${PORT}`)
    ConnectToMongoDB();
});