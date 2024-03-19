import PropTypes from "prop-types";
import { Rating } from "./Rating";
import { RiHeart3Line } from "react-icons/ri";

export const FinalStep = ({ formData, onConfirm, onPrev }) => {
  const handleConfirm = () => {
    onConfirm();
  };

  return (
    <>
      <h1 className="createprofile-header">Does this look right?</h1>
      <h1 className="createprofile-header">Verify Details</h1>

      <div className="formdata">
        {formData.profilePicture && (
          <div className="overview-pic">
            <img src={formData.profilePicture} alt="Profile Preview" />
          </div>
        )}
        {formData.fullName && (
          <div className="overview-fullname">
            <h3>{formData.fullName}</h3>
          </div>
        )}
        {formData.description && (
          <div className="overview-desc">
            <h3>Bio:</h3>
            <p>{formData.description}</p>
          </div>
        )}
        {formData.skills && (
          <div className="overview-skills">
            <h3>Skills:</h3>
            <ul>
              {formData.skills.map((skill, index) => (
                <li className="overview-rating" key={index}>
                  <label>{skill.skillName}</label>
                  <Rating
                    rating={skill.skillNumber}
                    numOfStars={5}
                    editable={false}
                  />
                </li>
              ))}
            </ul>
          </div>
        )}
        {formData.company && (
          <div className="overview-company">
            <h3>Company:</h3>
            <p>
              {formData.company}, {formData.position}
            </p>
          </div>
        )}
      </div>

      <button className="createprofile-next" onClick={handleConfirm}>
        Confirm
      </button>
      <button className="createprofile-back" onClick={onPrev}>
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
