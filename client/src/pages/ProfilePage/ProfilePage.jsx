import React, { useState } from "react";
import dummyImg from "./assets/dummyImg.png";
import { LunchPlans } from "./components/LunchPlans";

export const ProfilePage = () => {
  return (
    <div className="profile-container">
      <div className="profile-header">
        <img src={dummyImg}></img>
        <h2>Hello Albin Larsson!</h2>
      </div>
      <div className="profile-complete">
        <ul>
          <li>
            <p>Profile completed: 1/5</p>
            <p>
              Upload profile picture: <input type="checkbox"></input>
            </p>
            <p>List your interests: 1/3</p>
            <p>
              Name your company: <input type="checkbox"></input>
            </p>
            <p>
              Name your position: <input type="checkbox"></input>
            </p>
            <p>
              Name your favourite meal: <input type="checkbox"></input>
            </p>
          </li>
        </ul>
      </div>
      <div className="profile-achievements"></div>
      <LunchPlans />
      <div className="profile-favorite"></div>
    </div>
  );
};
