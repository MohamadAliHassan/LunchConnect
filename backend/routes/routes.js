import express from "express";

import { RegisterUser } from "../controllers/RegisterUser.js";
import { loginHandler } from "../controllers/LoginUser.js";
import { fetchAllAchievements } from "../controllers/fetchAchievements.js";

const router = express.Router();

router.post("/register", RegisterUser);

router.post("/login", loginHandler)

router.get("/achievements", fetchAllAchievements);

export default router;
