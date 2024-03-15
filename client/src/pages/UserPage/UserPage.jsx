import React, { useState, useEffect } from "react";
import { FaBriefcase } from "react-icons/fa";
import { FaHome } from "react-icons/fa";
import { IoIosPin } from "react-icons/io";
import { Rating } from "../CreateProfilePage/components/Rating";
import { useNavigate, useParams } from "react-router-dom";
import fetchHelper from "../../utils/fetchHelper";
import Image from "./assets/pfp.png";

export const UserPage = () => {
  // const storedData = JSON.parse(localStorage.getItem("profileData")) || {};
  // const { profilePicture, fullName, company, position, description, skills } =
  //   storedData;
  const [userData, setUserData] = useState({});
  const { userId } = useParams();

  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/chat");
  };

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await fetchHelper(`/user/${userId}`, "GET");
        const data = await response.json();
        console.log(data);
        setUserData(data);
      } catch (error) {
        console.error("Error while fetching userd data: ", error);
      }
    };
    fetchUserData();
  }, [userId]);

  return (
    <div className="userpage-container">
      <div className="userpage-profile">
        <img src={Image} alt="profile-img" />
        <h1>{userData.fullName}</h1>
        <h2>@{userData.username}</h2>
      </div>
      <div className="userpage-connect">
        <button onClick={handleNavigate}>Connect</button>
      </div>
      <div className="userpage-info">
        <ul className="userpage-info-general">
          <li>
            <FaBriefcase
              style={{
                width: "8%",
                height: "8%",
              }}
            />
            <p>
              Working as {userData.position} at {userData.company}
            </p>
          </li>
          <li>
            <FaHome
              style={{
                width: "8%",
                height: "8%",
              }}
            />
            <p>Lives in Göteborg</p>
          </li>
          <li>
            <IoIosPin
              style={{
                width: "10%",
                height: "10%",
              }}
            />
            <p>From Sweden</p>
          </li>
        </ul>
        <div className="userpage-info-bio">
          <p>Personal bio:</p>
          <div>
            <p>{userData.description}</p>
          </div>
        </div>
        <div className="userpage-info-skills">
          <ul>
            {userData.skills &&
              userData.skills.map((skill, index) => (
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
