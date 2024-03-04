import { IconContext } from "react-icons";
import { useNavigate } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa6";
import { FaWalking } from "react-icons/fa";
import { CgGym } from "react-icons/cg";
import { FaMedal } from "react-icons/fa";
import { IoTimeOutline } from "react-icons/io5";
import event from "../assets/event.jpg";

export const Achievements = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="eventsContainer">
        <section className="nav-events">
          <p>Achievements</p>
          <FaArrowRight size={26} onClick={() => navigate("/achievements")} />
        </section>
        <div className="profile-achievements">
          <ul className="profile-achievements-list">
            <IconContext.Provider value={{ color: "black", size: "100%" }}>
              <li>
                <FaWalking />
              </li>
              <li>
                <CgGym />
              </li>
              <li>
                <FaMedal />
              </li>
              <li>
                <IoTimeOutline />
              </li>
            </IconContext.Provider>
          </ul>
        </div>
      </div>
    </>
  );
};
