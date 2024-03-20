import React, { useEffect, useState } from "react";
import { HeaderChat } from "./components/HeaderChat";
import { LunchModal } from "./components/LunchModal";
import { ChatBox } from "./components/ChatBox";
import { Messages } from "./messages/Messages";
import MessageInput from "./messages/MessageInput";
import io from "socket.io-client";
import useConversation from "../../zustand/useConversation";

// const socket = io("http://localhost:3000"); // Replace with your server URL

export const ChatPage = () => {
  const { SelectedConversation, setSelectedConversation } = useConversation();

  useEffect(() => {
    return () => setSelectedConversation(null);
  }, [setSelectedConversation]);

  return (
    <>
      <HeaderChat />
      <Messages />
      <MessageInput />
      <LunchModal />
    </>
  );
};
