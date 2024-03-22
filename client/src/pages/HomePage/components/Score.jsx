import React, { useState } from "react";
import { CiStar } from "react-icons/ci";
import dummyImg from "../assets/dummyIMG.png";
import { useNavigate } from "react-router-dom";

export const Score = () => {
  const navigate = useNavigate();

  const handleNav = () => {
    navigate("/network");
  };
  return (
    <>
      <div className="home-container">
        <img src={dummyImg} alt="profile-img" />
        <h2>Welcome, User</h2>
        <div className="score-board">
          <CiStar size={50} style={{ margin: "0 20px" }} />
          <p> 0 points</p>
        </div>
        <button className="Lunch-btn" onClick={handleNav}>
          Lunch
        </button>
      </div>
    </>
  );
};
