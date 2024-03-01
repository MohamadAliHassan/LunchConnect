// AchievementList.js
import { useState, useEffect } from "react";
import fetchHelper from "../../utils/fetchHelper.js";
import Achievement from "./components/achievement";
import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export const AchievementsPage = () => {
  const [achievements, setAchievements] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchAchievements = async () => {
      try {
        const response = await fetchHelper("/achievements", "GET");
        const data = await response.json();
        setAchievements(data);
      } catch (error) {
        console.error("Error fetching achievements:", error);
      }
    };

    fetchAchievements();
  }, []);

  return (
    <>
      <div className="icon-fa-left">
        <FaArrowLeft
          size={45}
          onClick={() => navigate(-1)}
          style={{ cursor: "pointer" }}
        />
      </div>
      <div className="achievements-wrapper">
        <h2 className="achievements-header">Achievements</h2>
        <ul className="achievements-list">
          {achievements.map((achievement) => (
            <Achievement key={achievement._id} achievement={achievement} />
          ))}
        </ul>
      </div>
    </>
  );
};
