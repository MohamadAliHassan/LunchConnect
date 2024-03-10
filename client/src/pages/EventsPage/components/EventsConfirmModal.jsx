import PropTypes from "prop-types";

export const EventsConfirmModal = ({
  handleCloseConfirmModal,
  showConfirmModal,
  formData,
}) => {
  return (
    <>
      {showConfirmModal && (
        <div className="Confirm-modal-overlay">
          <div className="center-modal">
            <h3>Are you sure?</h3>
            <p>
              You have chosen the following details: {formData.title} on{" "}
              {formData.date} at {formData.location} with a capacity of{" "}
              {formData.capacity}.
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

EventsConfirmModal.propTypes = {
  handleCloseConfirmModal: PropTypes.func.isRequired,
  showConfirmModal: PropTypes.bool.isRequired,
  formData: PropTypes.shape({
    title: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    capacity: PropTypes.string.isRequired,
  }).isRequired,
};
