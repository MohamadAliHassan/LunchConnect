import React from "react";
import { HeaderChat } from "./components/HeaderChat";
// import { ChatBox } from "./components/ChatBox";
import { Message } from "./components/Message";

export const ChatPage = () => {
  return (
    <>
      <HeaderChat />
      {/* <ChatBox /> */}
      <Message />
    </>
  );
};
