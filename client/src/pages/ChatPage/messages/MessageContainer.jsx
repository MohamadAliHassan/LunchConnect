import React, { useEffect } from "react";
import { IoMdSend } from "react-icons/io";
import useConversation from "../../../zustand/useConversation";
import { Messages } from "./Messages";

export const MessageContainer = () => {
  const { selectedConversation, setSelectedConversation } = useConversation();

  useEffect(() => {
    return () => setSelectedConversation(null);
  }, [setSelectedConversation]);

  return (
    <div className="chat-container">
      <div className="chat-header">
        <span className="chat-header-text">
          {selectedConversation.fullName}
        </span>
      </div>
      <Messages />
      {/* <MessageInput /> */}
    </div>
  );
};

/*
export const Message = ({ messageInput, setMessageInput }) => {
  return (
    <>
      <div className="msg-container">
        <div className="flex-container">
          <input
            type="text"
            className="input-msg"
            value={messageInput}
            placeholder="Message..."
            onChange={(e) => setMessageInput(e.target.value)}
          />
          <div className="msg-sendBtn">
            <button className="send-btn">
              <IoMdSend size={20} />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
*/
