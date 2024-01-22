import React from "react";
import { CiStar } from "react-icons/ci";

export const Score = () => {
  return (
    <>
      <div className="home-container">
        <img src={"hello"} alt="profile-img" />
        <h2>Welcome, User</h2>
        <div className="score-board">
          <CiStar size={50} style={{ margin: "0 20px" }} />
          <p>125 points</p>
        </div>
        <button className="Lunch-btn">Lunch</button>
      </div>
    </>
  );
};
