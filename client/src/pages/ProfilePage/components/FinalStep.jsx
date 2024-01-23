import React from "react";
import PropTypes from "prop-types";
import { Rating } from "./Rating";

export const FinalStep = ({ formData, onConfirm, onPrev }) => {
  const handleConfirm = () => {
    onConfirm();
  };

  return (
    <>
      <h1 className="profile-header">Does this look right?</h1>
      <h1 className="profile-header">Verify Details</h1>

      <div className="formdata">
        {formData.profilePicture && (
          <div>
            <img
              src={formData.profilePicture}
              alt="Profile Preview"
              style={{ maxWidth: "14em" }}
            />
          </div>
        )}
        {formData.description && (
          <div>
            <p>{formData.description}</p>
          </div>
        )}
        {formData.skills && (
          <div className="overview-skills">
            <h3>Skills:</h3>
            <ul>
              {formData.skills.map((skill, index) => (
                <li className="overview-rating" key={index}>
                  <label>{skill.name}</label>
                  <Rating rating={skill.rating} numOfStars={5} />
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      <button className="profile-next" onClick={handleConfirm}>
        Confirm
      </button>
      <button className="profile-back" onClick={onPrev}>
        Back
      </button>
    </>
  );
};

FinalStep.propTypes = {
  formData: PropTypes.object.isRequired,
  onConfirm: PropTypes.func.isRequired,
  onPrev: PropTypes.func.isRequired,
};
