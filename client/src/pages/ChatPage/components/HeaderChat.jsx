import React from "react";
import { FaArrowLeft } from "react-icons/fa6";
import { MdFastfood } from "react-icons/md";
export const HeaderChat = () => {
  return (
    <>
      <div className="Header-chat">
        <FaArrowLeft size={40} />
        <img src="" alt="Img" />
        <div className="rounded">
          <MdFastfood size={40} />
        </div>
      </div>
      <p className="lunch-tag">Lunch</p>
      <div className="msg-container"></div>
    </>
  );
};
