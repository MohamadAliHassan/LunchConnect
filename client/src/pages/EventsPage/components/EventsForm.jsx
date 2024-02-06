import React from "react";

export const EventsForm = () => {
  return (
    <>
      <div className="eventcontainer">
        <h2>Add an event</h2>
        <div className="event-form">
          <div className="event-form-control">
            <h3>Title:</h3>
            <input type="text" name="title" />
          </div>
          <div className="event-form-control">
            <h3>Date:</h3>
            <input type="date" name="date" />
          </div>
          <div className="event-form-control">
            <h3>Address:</h3>
            <input type="text" name="date" />
          </div>
          <div className="event-form-control">
            <h3>Location:</h3>
            <input type="text" name="date" />
          </div>
          <div className="event-form-control">
            <h3>Capacity:</h3>
            <input type="text" name="date" />
          </div>
        </div>
        <div className="Event-btns">
          <button>Request</button>
          <button className="cancel-event">Cancel</button>
        </div>
      </div>
    </>
  );
};
