import PropTypes from "prop-types";

export const User = ({ user }) => {
  return (
    <>
      <li className="network-listitem">
        <img src={user.profilePicture} alt="image" />
        <div className="network-listitem-container">
          <h3>{user.fullName}</h3>
          <div>
            <img src="image" alt="image" />
            <p>{user.points}</p>
            <p>|</p>
            <img src="image" alt="image" />
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
    profilePicture: PropTypes.string.isRequired,
    fullName: PropTypes.string.isRequired,
    points: PropTypes.number.isRequired,
    position: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
};
