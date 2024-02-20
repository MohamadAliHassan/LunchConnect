import { FaPersonRunning } from "react-icons/fa6";
import { LuPodcast } from "react-icons/lu";
import { CiStar } from "react-icons/ci";
import { MdOutlineEmojiFoodBeverage } from "react-icons/md";
import { Modal } from "./Modal";
import { useState } from "react";

export const DailyMissions = () => {
  const [isModalOpen, setisModalOpen] = useState(false);

  const handleModalOpen = () => {
    setisModalOpen(true);
  };
  const handleCloseModal = () => {
    setisModalOpen(false);
  };
  return (
    <>
      <p>Daily mission for today</p>
      <div className="mission-container">
        <div className="mission-task" onClick={() => handleModalOpen()}>
          <div className="overlay">
            <FaPersonRunning size={25} style={{ margin: "0 auto" }} />
            <div className="score-mission">
              <CiStar />
              <small>{15}</small>
            </div>
            <small>Steps: 576/1000</small>
          </div>
        </div>
        <div className="mission-task">
          <div className="overlay">
            <LuPodcast size={25} style={{ margin: "0 auto" }} />
            <div className="score-mission">
              <CiStar />
              <small>{15}</small>
            </div>
            <small>Goal: Listen to 2 podcast</small>
          </div>
        </div>
        <div className="mission-task">
          <div className="overlay">
            <MdOutlineEmojiFoodBeverage
              size={25}
              style={{ margin: "0 auto" }}
            />
            <div className="score-mission">
              <CiStar />
              <small>{15}</small>
            </div>
            <small>Goal: Eat 3 meals</small>
          </div>
        </div>
      </div>
    </>
  );
};
