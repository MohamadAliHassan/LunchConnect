import { FaArrowLeft } from "react-icons/fa";
import DiryCoco from "../assets/dirtyCoco.jpg";
import { useNavigate } from "react-router-dom";
export const Lunches = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="LunchesPage-container">
        <div className="icon-fa-left">
          <FaArrowLeft
            size={40}
            onClick={() => navigate(-1)}
            style={{ cursor: "pointer" }}
          />
        </div>
        <div className="lunch-section">
          <h3 className="lunches-text">Your Lunches</h3>
        </div>
        <div className="lunch-overlay">
          <div className="lunch-flexContainer">
            <img src={DiryCoco} alt="lunch" className="lunchesIMG"></img>
            <div className="column-direction">
              <small>Date: 12/11/2024 Time: 12:20</small>
              <small>Location: Dirty Coco</small>
              <button className="close-lunchbtn">Cancel</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
