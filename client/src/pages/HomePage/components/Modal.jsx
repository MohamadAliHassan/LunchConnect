import React from "react";
import PropTypes from "prop-types";

export const Modal = ({ handleClose }) => {
  return (
    <>
      <div className="modal-overlay" onClick={handleClose}>
        <div className="modal">
          <h2>Have you achieved this task?</h2>
          <div className="button-container">
            <button onClick={() => console.log("Ja klickades")}>
              Confirm
            </button>
            <button onClick={() => console.log("Nej klickades")}>
              Cancel
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

Modal.propTypes = {
  handleClose: PropTypes.object.isRequired,
};
