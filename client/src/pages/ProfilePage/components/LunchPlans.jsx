import { FaArrowRight } from "react-icons/fa6";

export const LunchPlans = () => {
  return (
    <>
      <div className="eventsContainer">
        <section className="nav-events">
          <p>Lunch plans</p>
          <FaArrowRight size={26} />
        </section>
        <div className="upcomingContainer">
          <section className="upcomingEvent">
            <div className="overlay-event">
              <div className="description">
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
