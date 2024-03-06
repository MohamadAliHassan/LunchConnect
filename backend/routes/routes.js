import express from "express";

import { RegisterUser } from "../controllers/RegisterUser.js";
import { loginHandler } from "../controllers/LoginUser.js";
import { fetchAllAchievements } from "../controllers/achievement.fetcher.js";
import { fetchAllMissions } from "../controllers/mission.fetcher.js";
import { hashPasswords } from "../controllers/TestUser.js";
import { fetchUser } from "../controllers/currentuser.fetcher.js";
import { updateProfile } from "../controllers/UpdateUser.js"
import { sendMessage } from "../controllers/message.controller.js";

import { checkToken } from "../middlewares/checkToken.js"

const router = express.Router();

router.post("/register", RegisterUser);

router.post("/login", loginHandler);

router.get("/achievements", fetchAllAchievements);
router.get("/Missions", fetchAllMissions);

router.use(checkToken);

router.post("/send/:id", sendMessage)

router.put("/user", updateProfile)

router.get("/user", fetchUser)

export default router;
