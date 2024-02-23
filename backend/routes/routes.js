import express from "express";
import insertDummyData from "../controllers/TestUser.js";

import { RegisterUser } from "../controllers/RegisterUser.js";
import { loginHandler } from "../controllers/LoginUser.js";
import { fetchAllAchievements } from "../controllers/fetchAchievements.js";
import hashPasswords from "../controllers/TestUser.js";

const router = express.Router();
insertDummyData();

router.post("/register", RegisterUser);

router.post("/login", loginHandler)

router.get("/achievements", fetchAllAchievements);

export default router;
