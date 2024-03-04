import express from "express";
import router from "./routes/routes.js";
import mongoose from "mongoose";
import dotenv from "dotenv";
import { Server } from "socket.io";
import { createServer } from "node:http";

dotenv.config();

mongoose
  .connect(process.env.MONGO)
  .then(() => console.log("Database is connected"))
  .catch(() => console.log("Failed connection to the database"));

const app = express();
app.use(express.json());
const port = 3000;

// Initialize socket
const server = app.use("/api", router);

app.listen(port, () => {
  console.log(`Server is running on port http://localhost:${port}`);
});
