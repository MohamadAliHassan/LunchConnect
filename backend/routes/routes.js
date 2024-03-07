import express from "express";

import { RegisterUser } from "../controllers/RegisterUser.js";
import { loginHandler } from "../controllers/LoginUser.js";
import { fetchAllAchievements } from "../controllers/fetchAchievements.js";
import { fetchAllMissions } from "../controllers/fetchMissions.js";
import hashPasswords from "../controllers/TestUser.js";
import fetchCompletedUsers from "../controllers/fetchUsers.js";
import { fetchUser } from "../controllers/getCurrentUser.js";
import { updateProfile } from "../controllers/UpdateUser.js";

import { checkToken } from "../middlewares/checkToken.js";

const router = express.Router();

router.post("/register", RegisterUser);

router.post("/login", loginHandler);

router.get("/achievements", fetchAllAchievements);
router.get("/Missions", fetchAllMissions);
router.get("/users", fetchCompletedUsers);

router.use(checkToken);

router.put("/user", updateProfile);

router.get("/user", fetchUser);

export default router;
