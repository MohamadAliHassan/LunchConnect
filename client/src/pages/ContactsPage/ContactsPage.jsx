import { CgProfile } from "react-icons/cg";
import { FaMedal } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { IconContext } from "react-icons";

export const ContactsPage = () => {
  const navigate = useNavigate();

  const onNavigateHandle = () => {
    navigate("/chat");
  };

  return (
    <div className="contacts-container">
      <h2>Your chats</h2>
      <ul className="contacts-list">
        <li className="contacts-listitem" onClick={onNavigateHandle}>
          <IconContext.Provider value={{ color: "white", size: "100%" }}>
            <CgProfile />
          </IconContext.Provider>
          <div className="contacts-listitem-container">
            <h3>Bertil Strandberg</h3>
            <div>
              <FaStar />
              <p>940</p>
              <p>|</p>
              <FaMedal />
              <p>24</p>
            </div>
            <p>Redovisningskonsult</p>
          </div>
        </li>
        <li className="contacts-listitem" onClick={onNavigateHandle}>
          <IconContext.Provider value={{ color: "white", size: "100%" }}>
            <CgProfile />
          </IconContext.Provider>
          <div className="contacts-listitem-container">
            <h3>Johan Falk</h3>
            <div>
              <FaStar />
              <p>1255</p>
              <p>|</p>
              <FaMedal />
              <p>22</p>
            </div>
            <p>Senior Programmerare</p>
          </div>
        </li>
        <li className="contacts-listitem" onClick={onNavigateHandle}>
          <IconContext.Provider value={{ color: "white", size: "100%" }}>
            <CgProfile />
          </IconContext.Provider>
          <div className="contacts-listitem-container">
            <h3>Mohammed Ali</h3>
            <div>
              <FaStar />
              <p>1430</p>
              <p>|</p>
              <FaMedal />
              <p>19</p>
            </div>
            <p>Revisor</p>
          </div>
        </li>
      </ul>
    </div>
  );
};
