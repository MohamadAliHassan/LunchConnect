import React, { useEffect, useState } from "react";
import { HeaderChat } from "./components/HeaderChat";
import { LunchModal } from "./components/LunchModal";
// import { ChatBox } from "./components/ChatBox";
import { Message } from "./components/Message";
import io from "socket.io-client";

export const ChatPage = () => {
  const socket = io("http://localhost:3000");

  const [message, setMessage] = useState([]);
  const [messageInput, setMessageInput] = useState("");

  useEffect(() => {
    socket.on("message", (message) => {
      setMessage([...message, message]);
    });

    return () => {
      socket.off("message");
    };
  }, []);

  return (
    <>
      <HeaderChat />
      {/* <ChatBox /> */}
      <Message messageInput={messageInput} setMessageInput={setMessageInput} />
      <LunchModal />
    </>
  );
};
