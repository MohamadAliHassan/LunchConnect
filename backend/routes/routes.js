import express from "express";

import testfunction from "../service/testService.js"

const router = express.Router();

router.get("/", testfunction)

export default router;