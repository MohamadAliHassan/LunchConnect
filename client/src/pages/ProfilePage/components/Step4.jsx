// Step4.js
import React, { useState } from "react";
import PropTypes from "prop-types";

export const Step4 = ({ onNext, onPrev }) => {
  const [company, setCompany] = useState("");
  const [position, setPosition] = useState("");

  const handleNext = () => {
    onNext({ company, position });
  };

  const handlePrev = () => {
    onPrev();
  };

  return (
    <>
      <h1 className="profile-header">4/4</h1>
      <h1 className="profile-header">Work Experience</h1>
      <div className="profilewrapper">
        <h3 className="profile-header">Where do you work?</h3>
        <ul className="profile-list">
          <li className="profile-listitem">
            <label>
              Company:
              <input
                type="text"
                value={company}
                onChange={(e) => setCompany(e.target.value)}
              />
            </label>
          </li>
          <li className="profile-listitem">
            <label>
              Position:
              <input
                type="text"
                value={position}
                onChange={(e) => setPosition(e.target.value)}
              />
            </label>
          </li>
        </ul>
      </div>
      <button className="profile-next" onClick={handleNext}>
        Next
      </button>
      <button className="profile-back" onClick={handlePrev}>
        Previous
      </button>
    </>
  );
};

Step4.propTypes = {
  onNext: PropTypes.func.isRequired,
  onPrev: PropTypes.func.isRequired,
};
