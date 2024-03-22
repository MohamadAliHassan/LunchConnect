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
      <h1 className="createprofile-header">4/4</h1>
      <h1 className="createprofile-header">Work Experience</h1>
      <div className="createprofilewrapper">
        <h3 className="createprofile-header">Where do you work?</h3>
        <ul className="createprofile-list">
          <li className="createprofile-listitem">
            <label>
              Company:
              <input
                type="text"
                value={company}
                onChange={(e) => setCompany(e.target.value)}
              />
            </label>
          </li>
          <li className="createprofile-listitem">
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
      <button className="createprofile-next" onClick={handleNext}>
        Next
      </button>
      <button className="createprofile-back" onClick={handlePrev}>
        Previous
      </button>
    </>
  );
};

Step4.propTypes = {
  onNext: PropTypes.func.isRequired,
  onPrev: PropTypes.func.isRequired,
};
