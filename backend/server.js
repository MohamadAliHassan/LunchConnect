import express from "express";
import cors from "cors";
import router from "./routes/routes.js";
import mongoose from "mongoose";
import dotenv from "dotenv";

import http from "http";
import { fileURLToPath } from "url";
import { dirname, join } from "path";
import { Server } from "socket.io";

import { addUser, removeUser } from "./socketUtils/users.js";
import { addMessage, getChannelMessages } from "./socketUtils/messages.js";
import { channels, addUserToChannel } from "./socketUtils/channels.js";

dotenv.config();

mongoose
  .connect(process.env.MONGO)
  .then(() => console.log("Database is connected"))
  .catch(() => console.log("Failed connection to the database"));

const app = express();
app.use(express.json());
app.use(cors({ origin: true }));
const port = 3000;

// Initialize socket
const server = http.createServer(app);
const io = new Server(server);

io.on("connection", (socket) => {
  const { username, channel } = socket.handshake.query;
  console.log(`${username} connected`);

  socket.join(channel);
  addUser(username, socket.id);
  addUserToChannel(channel, username);

  socket.on("disconnect", () => {
    console.log(`${username} disconnected`);
    removeUser(username);
  });

  socket.on("CHANNEL_SWITCH", (data) => {
    const { prevChannel, channel } = data;
    if (prevChannel) {
      socket.leave(prevChannel);
    }
    if (channel) {
      socket.join(channel);
    }
  });

  socket.on("MESSAGE_SEND", (data) => {
    addMessage(data);
    const { channel } = data;
    socket.broadcast.to(channel).emit("NEW_MESSAGE", data);
  });
});

app.get("/channels/:channel/messages", (req, res) => {
  const allMessages = getChannelMessages(req.params.channel);

  return res.json({ allMessages });
});

app.get("/getChannels", (req, res) => {
  return res.json({ channels });
});

// Use router
app.use("/api", router);

app.listen(port, () => {
  console.log(`Server is running on port http://localhost:${port}`);
});
