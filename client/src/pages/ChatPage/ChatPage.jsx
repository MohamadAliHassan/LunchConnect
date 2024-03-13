import React, { useEffect, useState } from "react";
import { HeaderChat } from "./components/HeaderChat";
import { LunchModal } from "./components/LunchModal";
import { ChatBox } from "./components/ChatBox";
import { Message } from "./messages/Message";
import io from "socket.io-client";

// const socket = io("http://localhost:3000"); // Replace with your server URL

export const ChatPage = () => {
  const [messages, setMessages] = useState([]);
  const [messageInput, setMessageInput] = useState("");

  return (
    <>
      <HeaderChat />
      <ChatBox messages={messages} />
      <Message
        messageInput={messageInput}
        setMessageInput={setMessageInput}
        sendMessage={sendMessage}
      />
      <LunchModal />
    </>
  );
};
