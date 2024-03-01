import { FaArrowRight } from "react-icons/fa6";
import event from "../assets/event.jpg";
import { useNavigate } from "react-router-dom";

export const LunchPlans = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="profile-plans-container">
        <section className="nav-events">
          <p>Lunch plans</p>
          <FaArrowRight size={26} onClick={() => navigate("/lunches")} />
        </section>
        <div className="profile-plans-wrap">
          <div className="profile-plans-description">
            <img src={event} alt="image" />
            <h3>15/12/2024 12:20</h3>
            <h3>Dirty Coco, Stockholm</h3>
          </div>
        </div>
      </div>
    </>
  );
};
