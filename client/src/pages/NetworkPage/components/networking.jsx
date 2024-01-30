import pfpPlaceholder from "../assets/pfpPlaceholder.png";
import ranking from "../assets/ranking.png";
import star from "../assets/star.png";
import { useNavigate } from "react-router-dom";

export const Networking = () => {
  const storedData = JSON.parse(localStorage.getItem("profileData")) || {};
  const { profilePicture, fullName, position } = storedData;
  const navigate = useNavigate();

  const onNavigateHandle = () => {
    navigate("/user");
  };

  return (
    <div className="network-list-container">
      <p>Connect with other people:</p>
      <ul className="network-list">
        <li className="network-listitem" onClick={onNavigateHandle}>
          <img src={profilePicture} />
          <div className="network-listitem-container">
            <h3>{fullName}</h3>
            <div>
              <img src={star} />
              <p>825</p>
              <p>|</p>
              <img src={ranking} />
              <p>28</p>
            </div>
            <p>{position}</p>
          </div>
        </li>
        <li className="network-listitem">
          <img src={pfpPlaceholder} />
          <div className="network-listitem-container">
            <h3>Stefan Göransson</h3>
            <div>
              <img src={star} />
              <p>1255</p>
              <p>|</p>
              <img src={ranking} />
              <p>22</p>
            </div>
            <p>Revisor</p>
          </div>
        </li>
      </ul>
    </div>
  );
};
