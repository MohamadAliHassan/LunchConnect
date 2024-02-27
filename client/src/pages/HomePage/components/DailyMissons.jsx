import { useState, useEffect } from "react";
import fetchHelper from "../../../utils/fetchHelper.js";
import { Modal } from "./Modal.jsx";

export const DailyMissions = () => {
  const [missions, setMissions] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedMission, setSelectedMission] = useState(null);

  useEffect(() => {
    const fetchMissions = async () => {
      try {
        const response = await fetchHelper("/api/Missions", "GET");
        const data = await response.json();
        setMissions(data);
      } catch (error) {
        console.error("Error fetching missions:", error);
      }
    };

    fetchMissions();
  }, []);

  const handleModalOpen = (mission) => {
    setSelectedMission(mission);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <p>Daily mission for today</p>
      <div className="mission-container">
        {missions.map((mission) => (
          <div
            className="mission-task"
            key={mission.id}
            onClick={() => handleModalOpen(mission)}
          >
            <div className="overlay">
              <img
                src={`http://localhost:5173/src/pages/HomePage/assets/${mission.id}.jpg`}
                alt="image"
              />
              <div className="score-mission">
                <small>{mission.score}</small>
              </div>
              <small>Steps: {mission.steps}/1000</small>
            </div>
          </div>
        ))}
      </div>
      {isModalOpen && (
        <Modal handleClose={handleCloseModal} mission={selectedMission} />
      )}
    </div>
  );
};
