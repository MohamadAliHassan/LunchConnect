import express from "express";

import { RegisterUser } from "../controllers/RegisterUser.js";
import { fetchAllAchievements } from "../controllers/fetchAchievements.js";
import insertAchievements from "../controllers/achievementSeeder.js"

const router = express.Router();

router.get("/achievements", fetchAllAchievements);

router.post("/test", RegisterUser);

export default router;
