import express from "express";
import messageControllers from "../controllers/messageControllers.js";
import protectRoute from "../middleware/protectRoute.js";

const router = express.Router();

router.get("/:id", protectRoute, messageControllers.getMessages);
router.post("/send/:id",protectRoute, messageControllers.sendMessage);

export default router;