import React from "react";

export const EventsConfirmModal = ({
  handleCloseConfirmModal,
  showConfirmModal,
}) => {
  return (
    <>
      {showConfirmModal && (
        <div className="Confirm-modal-overlay">
          <div className="center-modal">
            <h3>Are you sure?</h3>
            <p>
              You have chose this following date; in Stockholm at Sushi Yama
              around 12.30pm
            </p>
            <div className="modal-buttons">
              <button onClick={handleCloseConfirmModal}>Yes</button>
              <button
                className="close-btn-modal"
                onClick={handleCloseConfirmModal}
              >
                No
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
