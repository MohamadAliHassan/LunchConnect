import express from "express";

import { RegisterUser } from "../controllers/RegisterUser.js";
import { loginHandler } from "../controllers/LoginUser.js";

const router = express.Router();

router.post("/register", RegisterUser);

router.post("/login", loginHandler)

export default router;
