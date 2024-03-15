import { useState, useEffect } from "react";
import fetchHelper from "../../../utils/fetchHelper.js";
import { Modal } from "./Modal.jsx";
import { Mission } from "./Mission.jsx";

export const DailyMissions = () => {
  const [missions, setMissions] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedMission, setSelectedMission] = useState(null);

  useEffect(() => {
    const fetchMissions = async () => {
      try {
        const response = await fetchHelper("/Missions", "GET");
        const data = await response.json();

        if (response.ok) {
          setMissions(data);
        }
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
          <Mission
            key={mission._id}
            mission={mission}
            onClick={handleModalOpen}
          />
        ))}
      </div>
      {isModalOpen && (
        <Modal handleClose={handleCloseModal} mission={selectedMission} />
      )}
    </div>
  );
};
