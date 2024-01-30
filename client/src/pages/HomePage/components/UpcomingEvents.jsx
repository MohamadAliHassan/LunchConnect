import { FaArrowRight } from "react-icons/fa6";
export const UpcomingEvents = () => {
  return (
    <>
      <div className="eventsContainer">
        <section className="nav-events">
          <p>Upcoming events</p>
          <FaArrowRight size={26} />
        </section>
        <section className="upcomingEvent">
          <div className="overlay-event">
            <div className="description">
              <img src="" alt="image" />
              <small>Marknadsföring med Anders</small>
              <small>14/12 2023</small>
              <small>Nackademin, Stockholm</small>
            </div>
          </div>
        </section>
        <section className="upcomingEvent">
          <div className="overlay-event">
            <div className="description">
              <img src="" alt="image" />
              <small>Marknadsföring med Anders</small>
              <small>14/12 2023</small>
              <small>Nackademin, Stockholm</small>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};
