// AchievementList.js
import { useState, useEffect } from "react";
import fetchHelper from "../../utils/fetchHelper.js";
import Achievement from "./components/achievement";

export const AchievementsPage = () => {
  const [achievements, setAchievements] = useState([]);

  useEffect(() => {
    const fetchAchievements = async () => {
      try {
        const response = await fetchHelper("/api/achievements", "GET");
        const data = await response.json();
        setAchievements(data);
      } catch (error) {
        console.error("Error fetching achievements:", error);
      }
    };

    fetchAchievements();
  }, []);

  return (
    <div className="achievements-wrapper">
      <h2 className="achievements-header">Achievements</h2>
      <ul className="achievements-list">
        {achievements.map((achievement) => (
          <Achievement key={achievement._id} achievement={achievement} />
        ))}
      </ul>
    </div>
  );
};
