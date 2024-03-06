import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa6";
import { MdFastfood } from "react-icons/md";
import { LunchModal } from "./LunchModal";

export const HeaderChat = () => {
  const [showLunchModal, setShowLunchModal] = useState(false);

  const handleOpenLunchModal = () => {
    setShowLunchModal(true);
  };

  const handleCloseLunchModal = () => {
    setShowLunchModal(false);
  };

  const navigate = useNavigate();
  const storedData = JSON.parse(localStorage.getItem("profileData")) || {};
  const { profilePicture } = storedData;

  return (
    <>
      <div className="Header-chat">
        <FaArrowLeft size={40} onClick={() => navigate(-1)} />
        <div className="bio">
          <img src={profilePicture} alt="Img" className="profile-img" />
          <p>Stefan</p>
        </div>
        <div className="rounded" onClick={handleOpenLunchModal}>
          <MdFastfood size={40} />
        </div>
      </div>
      <p className="lunch-tag">Lunch</p>
      <div className="msg-container"></div>
      <LunchModal
        showLunchModal={showLunchModal}
        handleCloseLunchModal={handleCloseLunchModal}
      />
    </>
  );
};
