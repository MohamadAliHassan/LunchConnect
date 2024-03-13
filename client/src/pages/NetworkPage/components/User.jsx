import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import Logo from "../assets/logo.jpg";

export const User = ({ user }) => {
  const navigate = useNavigate();
  console.log(user._id);
  return (
    <>
      <li
        className="network-listitem"
        onClick={() => navigate(`/user/${user._id}`)}
      >
        <img src={Logo} alt="image" />
        <div className="network-listitem-container">
          <h3>{user.fullName}</h3>
          <div>
            <img src="image" alt="image" />
            <p>{user.points}</p>
            <p>{user.position}</p>
          </div>
          <p>{user.description}</p>
        </div>
      </li>
    </>
  );
};

User.propTypes = {
  user: PropTypes.shape({
    fullName: PropTypes.string.isRequired,
    points: PropTypes.number.isRequired,
    position: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    _id: PropTypes.string.isRequired,
  }).isRequired,
};
