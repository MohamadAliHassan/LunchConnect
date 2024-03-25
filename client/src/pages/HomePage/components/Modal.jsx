import PropTypes from "prop-types";

export const Modal = ({ handleClose, mission }) => {
  return (
    <>
      <div className="modal-overlay" onClick={handleClose}>
        <div className="modal" onClick={(e) => e.stopPropagation()}>
          <h2>Have you completed this mission?</h2>
          <h3 className="task-heading">{mission.task}</h3>
          <p>{mission.description}</p>
          <div className="button-container">
            <button onClick={() => console.log("Ja klickades")}>Confirm</button>
            <button className="close-modal-btn" onClick={handleClose}>
              Cancel
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

Modal.propTypes = {
  handleClose: PropTypes.func.isRequired,
  mission: PropTypes.object.isRequired,
};
