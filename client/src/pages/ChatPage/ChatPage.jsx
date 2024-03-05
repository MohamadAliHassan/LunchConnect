import React, { useEffect, useState } from "react";
import { HeaderChat } from "./components/HeaderChat";
import { LunchModal } from "./components/LunchModal";
import { ChatBox } from "./components/ChatBox";
import { Message } from "./components/Message";
import io from "socket.io-client";

const socket = io("http://localhost:3000"); // Replace with your server URL

export const ChatPage = () => {
  const [messages, setMessages] = useState([]);
  const [messageInput, setMessageInput] = useState("");

  useEffect(() => {
    // Listen for incoming messages from the server
    socket.on("NEW_MESSAGE", (data) => {
      // Update UI with the new message
      setMessages((prevMessages) => [...prevMessages, data]);
    });

    return () => {
      socket.off("NEW_MESSAGE");
    };
  }, []);

  // Function to send message to the server
  const sendMessage = () => {
    // Emit the message to the server
    socket.emit("MESSAGE_SEND", { message: messageInput });

    // Clear the message input
    setMessageInput("");
  };

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
