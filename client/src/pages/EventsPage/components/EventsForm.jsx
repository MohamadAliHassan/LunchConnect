import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { EventsConfirmModal } from "./EventsConfirmModal";

export const EventsForm = () => {
  const navigate = useNavigate();
  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const [formData, setFormData] = useState({
    title: "",
    date: "",
    address: "",
    location: "",
    capacity: "",
  });

  const handleOpenConfirmModal = () => {
    setShowConfirmModal(true);
  };

  const handleCloseConfirmModal = () => {
    setShowConfirmModal(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <>
      <div className="eventcontainer">
        <h2>Add an event</h2>
        <div className="event-form">
          <div className="event-form-control">
            <h3>Title:</h3>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
            />
          </div>
          <div className="event-form-control">
            <h3>Date:</h3>
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
            />
          </div>
          <div className="event-form-control">
            <h3>Address:</h3>
            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleChange}
            />
          </div>
          <div className="event-form-control">
            <h3>Location:</h3>
            <input
              type="text"
              name="location"
              value={formData.location}
              onChange={handleChange}
            />
          </div>
          <div className="event-form-control">
            <h3>Capacity:</h3>
            <input
              type="text"
              name="capacity"
              value={formData.capacity}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="Event-btns">
          <button className="request-event" onClick={handleOpenConfirmModal}>
            Request
          </button>
          <button className="cancel-event" onClick={() => navigate(-1)}>
            Cancel
          </button>
        </div>
      </div>
      <EventsConfirmModal
        handleCloseConfirmModal={handleCloseConfirmModal}
        showConfirmModal={showConfirmModal}
        formData={formData}
      />
    </>
  );
};
