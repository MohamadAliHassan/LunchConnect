import React from "react";
import { FaBriefcase } from "react-icons/fa";
import { FaHome } from "react-icons/fa";
import { IoIosPin } from "react-icons/io";
import { Rating } from "../ProfilePage/components/Rating";

export const UserPage = () => {
  const storedData = JSON.parse(localStorage.getItem("profileData")) || {};
  const { profilePicture, fullName, company, position, description, skills } =
    storedData;
  return (
    <div className="userpage-container">
      <div className="userpage-profile">
        <img src={profilePicture} alt="profile-img" />
        <h1>{fullName}</h1>
        <h2>{position}</h2>
      </div>
      <div className="userpage-connect">
        <button>Connect</button>
      </div>
      <div className="userpage-info">
        <ul className="userpage-info-general">
          <li>
            <FaBriefcase
              style={{
                width: "5%",
                height: "5%",
              }}
            />
            <p>
              Working as {position} at {company}
            </p>
          </li>
          <li>
            <FaHome
              style={{
                width: "5%",
                height: "5%",
              }}
            />
            <p>Lives in Göteborg</p>
          </li>
          <li>
            <IoIosPin
              style={{
                width: "5%",
                height: "5%",
              }}
            />
            <p>From Sweden</p>
          </li>
        </ul>
        <div className="userpage-info-bio">
          <p>Personal bio:</p>
          <div>
            <p>{description}</p>
          </div>
        </div>
        <div className="userpage-info-skills">
          <ul>
            {skills &&
              skills.map((skill, index) => (
                <li className="overview-rating" key={index}>
                  <strong>Skill:</strong> {skill.name}
                  <Rating
                    rating={skill.rating}
                    numOfStars={5}
                    editable={false}
                  />
                </li>
              ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
