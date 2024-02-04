import { FaEdit } from "react-icons/fa";
import event from "../assets/event.jpg";

export const LunchPlans = () => {
  return (
    <>
      <div className="eventsContainer">
        <section className="nav-events">
          <p>Lunch plans</p>
          <FaEdit size={26} />
        </section>
        <div className="upcomingContainer">
          <section className="upcomingEvent">
            <div className="overlay-event">
              <div className="description">
                <img src={event} alt="image" />
                <small>15/12/2024 12:20</small>
                <small>Dirty Coco, Stockholm</small>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};
