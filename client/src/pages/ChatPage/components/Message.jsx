import React from "react";
import { IoMdSend } from "react-icons/io";
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
