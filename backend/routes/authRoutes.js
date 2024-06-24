import express from "express";
import authControllers from "../controllers/authControllers.js"

const router = express.Router();

router.post("/signup", authControllers.signUp);
router.post("/login", authControllers.login);
router.post("/signout", authControllers.signOut);

export default router;