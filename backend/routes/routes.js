import express from "express";
import { fetchAllAchievements } from "../controllers/achievement.fetcher.js";
import { fetchAllMissions } from "../controllers/mission.fetcher.js";
import { hashPasswords } from "../controllers/TestUser.js";
import { fetchUser } from "../controllers/currentuser.fetcher.js";
import { updateProfile } from "../controllers/UpdateUser.js"
import { sendMessage, getMessages } from "../controllers/message.controller.js";
import fetchCompletedUsers from "../controllers/fetchUsers.js"

import { checkToken } from "../middlewares/checkToken.js"

const router = express.Router();

router.get("/achievements", fetchAllAchievements);
router.get("/Missions", fetchAllMissions);

router.use(checkToken);

router.get("/users", fetchCompletedUsers);

router.get("/messages/:id", getMessages)
router.post("/send/:id", sendMessage)

router.put("/user", updateProfile)

router.get("/user", fetchUser)

export default router;
