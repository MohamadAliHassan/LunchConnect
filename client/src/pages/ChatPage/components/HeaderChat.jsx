import React from "react";
import { FaArrowLeft } from "react-icons/fa6";
import { MdFastfood } from "react-icons/md";
// import { dummyIMG } from "../assets/dummyIMG.png";

export const HeaderChat = () => {
  const storedData = JSON.parse(localStorage.getItem("profileData")) || {};
  const { profilePicture } = storedData;
  return (
    <>
      <div className="Header-chat">
        <FaArrowLeft size={40} />
        <div className="bio">
          <img src="" alt="Img" />
          <p>Stefan</p>
        </div>
        <div className="rounded">
          <MdFastfood size={40} />
        </div>
      </div>
      <p className="lunch-tag">Lunch</p>
      <div className="msg-container"></div>
    </>
  );
};
