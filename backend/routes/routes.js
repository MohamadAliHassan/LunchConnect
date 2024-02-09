import express from "express";

import { RegisterUser } from "../controllers/RegisterUser.js";

const router = express.Router();

router.post("/test", RegisterUser);

export default router;
