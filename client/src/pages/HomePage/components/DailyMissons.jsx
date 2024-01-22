import { FaPersonRunning } from "react-icons/fa6";
import { CiStar } from "react-icons/ci";
export const DailyMissons = () => {
  return (
    <>
      <div className="mission-container">
        <p>Daily mission for today</p>
        <div className="mission-task">
          <div className="overlay">
            <FaPersonRunning size={25} style={{ margin: "5px 35px" }} />
            <div className="score-mission">
              <CiStar />
              <small>{15}</small>
            </div>
            <small>Steps: 576/1000</small>
          </div>
        </div>
        <div className="mission-task">
          <div className="overlay">
            <FaPersonRunning size={25} style={{ margin: "5px 35px" }} />
            <div className="score-mission">
              <CiStar />
              <small>{15}</small>
            </div>
            <small>Steps: 576/1000</small>
          </div>
        </div>
      </div>
    </>
  );
};
