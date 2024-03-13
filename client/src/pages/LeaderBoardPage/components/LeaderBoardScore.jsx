import { IoFilterSharp } from "react-icons/io5";
import { FaMedal } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa";
import DummyIMG from "../assets/dummyIMG.png";
import { ModalFilter } from "./ModalFilter";
import { useState } from "react";
export const LeaderBoardScore = () => {
  const [openModal, setOpenModal] = useState(false);

  const handleOpen = () => {
    setOpenModal(true);
  };
  const handleClose = () => {
    setOpenModal(false);
  };

  return (
    <>
      <div className="Leaderboard-container">
        <div className="filter" onClick={handleOpen}>
          <IoFilterSharp size={50} />
        </div>
        {openModal && <ModalFilter handleClose={handleClose} />}
        <div className="leaderboard-overlay">
          <div className="leaderboard-desc">
            <div className="icons-fa">
              <FaMedal size={40} />
              <small className="leader-score">1</small>
            </div>
            <div className="leaderboard-bio">
              <img
                src={DummyIMG}
                alt="image"
                className="leaderboard-image"
              ></img>
              <small className="leaderboard-name">Albin Andersson</small>
            </div>
            <div className="icons-fa">
              <FaRegStar size={45} />
              <small className="leader-score">100</small>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
