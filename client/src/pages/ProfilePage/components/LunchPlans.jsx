import { FaArrowRight } from "react-icons/fa6";
import event from "../assets/event.jpg";

export const LunchPlans = () => {
  return (
    <>
      <div className="profile-plans-container">
        <section className="nav-events">
          <p>Lunch plans</p>
          <FaArrowRight size={26} />
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
