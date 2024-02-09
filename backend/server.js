import express from "express";
import router from "./routes/routes.js";
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

mongoose
  .connect(process.env.MONGO)
  .then(() => console.log("Database is connected"))
  .catch(() => console.log("Failed connection to the database"));

const app = express();
const port = 3000;

app.use("/api", router);

app.listen(port, () => {
  console.log(`Server is running on port http://localhost:${port}`);
});
