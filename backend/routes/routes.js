import express from "express";

import { RegisterUser } from "../controllers/RegisterUser.js";
import { loginHandler } from "../controllers/LoginUser.js";
import { fetchAllAchievements } from "../controllers/fetchAchievements.js";
import { fetchAllMissions } from "../controllers/fetchMissions.js";
import { hashPasswords } from "../controllers/TestUser.js";

const router = express.Router();

router.post("/register", RegisterUser);

router.post("/login", loginHandler);

router.get("/achievements", fetchAllAchievements);
router.get("/Missions", fetchAllMissions);

export default router;
