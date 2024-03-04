import React from "react";

export const LunchModal = ({ showLunchModal, handleCloseLunchModal }) => {
  return (
    <>
      {showLunchModal && (
        <div className="lunchModal-container">
          <div className="center-modal">
            <p>Do you want to request a lunch date with user</p>
            <div className="lunch-control-input">
              <label>Date:</label>
              <input type="date" />
            </div>
            <div className="lunch-control-input">
              <label>Time:</label>
              <input type="date" />
            </div>
            <div className="lunch-control-input">
              <label>Address:</label>
              <input type="text" />
            </div>
            <div className="btn-container-lunch">
              <button className="lunch-btn" onClick={handleCloseLunchModal}>
                Request
              </button>
              <button
                className="lunch-cancel-btn"
                onClick={handleCloseLunchModal}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
