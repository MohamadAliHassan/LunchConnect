import React, { useState } from "react";
import dummyImg from "./assets/dummyImg.png";
import { LunchPlans } from "./components/LunchPlans";
import { Achievements } from "./components/Achievements";
import { FavoriteMeal } from "./components/FavoriteMeal";

export const ProfilePage = () => {
  return (
    <div className="profile-container">
      <div className="profile-header">
        <img src={dummyImg}></img>
        <h1>Hello Albin Larsson!</h1>
      </div>
      <div className="profile-complete">
        <ul>
          <li>
            Profile completed: 1/5
          </li>
          <li>
              Upload profile picture: <input type="checkbox"></input>
          </li>
          <li>
            List your interests: 1/3
          </li>
          <li>
              Name your company: <input type="checkbox"></input>
          </li>
          <li>
              Name your position: <input type="checkbox"></input>
          </li>
          <li>
              Name your favourite meal: <input type="checkbox"></input>
          </li>
        </ul>
      </div>
      <Achievements /> 
      <div className="profile-plans">
        <LunchPlans />
        <FavoriteMeal />
      </div>
    </div>
  );
};
