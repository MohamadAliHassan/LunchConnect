import { IoFilterSharp } from "react-icons/io5";
import { FaMedal } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa";
import DummyIMG from "../assets/dummyIMG.png";
export const LeaderBoardScore = () => {
  return (
    <>
      <div className="Leaderboard-container">
        <div className="filter">
          <IoFilterSharp size={50} />
        </div>
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
              <small className="leaderboard-name">User</small>
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
