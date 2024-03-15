import PropTypes from "prop-types";

export const Mission = ({ mission, onClick }) => {
  return (
    <div
      className="mission-task"
      key={mission._id}
      onClick={() => onClick(mission)}>
      <div className="overlay">
        <img
          src={`http://localhost:5173/src/pages/HomePage/assets/${mission._id}.png`}
          alt="image"
        />
        <div className="score-mission">
          <small>{mission.points}</small>
        </div>
        <small>
          {mission.requirement[0].requirementName}: 0/
          {mission.requirement[0].requirementAmount}
        </small>
      </div>
    </div>
  );
};

Mission.propTypes = {
  mission: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    points: PropTypes.number.isRequired,
    requirement: PropTypes.arrayOf(
      PropTypes.shape({
        requirementName: PropTypes.string.isRequired,
        requirementAmount: PropTypes.number.isRequired,
      })
    ).isRequired,
  }).isRequired,
  onClick: PropTypes.func.isRequired,
};
