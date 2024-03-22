import { useState } from "react";
import { PropTypes } from "prop-types";

export const Step3 = ({ onNext, onPrev }) => {
  const [description, setDescription] = useState();

  const handleDescription = (e) => {
    const text = e.target.value;
    setDescription(text);
  };

  const handleNext = () => {
    onNext({ description });
  };

  const handlePrev = () => {
    onPrev();
  };

  return (
    <>
      <h1 className="createprofile-header">3/3</h1>
      <h1 className="createprofile-header">Create Profile</h1>

      <div className="createprofile-description">
        <label>
          <p>Describe yourself, your background, interests, hobbies, etc.</p>
          <textarea
            placeholder="..."
            rows="4"
            cols="50"
            onChange={handleDescription}></textarea>
        </label>
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

Step3.propTypes = {
  onNext: PropTypes.func.isRequired,
  onPrev: PropTypes.func.isRequired,
};
