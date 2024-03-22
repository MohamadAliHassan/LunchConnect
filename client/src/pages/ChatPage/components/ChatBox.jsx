import React from "react";
import PropTypes from "prop-types";

export const ChatBox = ({ messages }) => {
  return (
    <div className="chat-box">
      {messages.map((message, index) => (
        <div key={index} className="message">
          <span className="username">{message.username}: </span>
          <span className="text">{message.text}</span>
        </div>
      ))}
    </div>
  );
};

ChatBox.propTypes = {
  messages: PropTypes.string,
};
