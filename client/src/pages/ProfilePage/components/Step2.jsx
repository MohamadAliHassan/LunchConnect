import React, { useState } from "react";
import PropTypes from "prop-types";
import { Rating } from "./Rating";

export const Step2 = ({ onNext, onPrev }) => {
  const [skills, setSkills] = useState([]);
  const [newSkill, setNewSkill] = useState({ name: "", rating: 0 });

  const handleSkillChange = (propertyName, value) => {
    setNewSkill((prevSkill) => ({ ...prevSkill, [propertyName]: value }));
  };

  const handleAddSkill = () => {
    setSkills((prevSkills) => [...prevSkills, newSkill]);
    setNewSkill({ name: "", rating: 0 });
  };

  const handleNext = () => {
    onNext({ skills });
  };

  const handlePrev = () => {
    onPrev();
  };

  return (
    <>
      <h1 className="profile-header">2/3</h1>
      <h1 className="profile-header">Create Profile</h1>
      <div className="profilewrapper">
        <h3 className="profile-header">What are your skills? (Max 5)</h3>
        <ul className="profile-list"></ul>
        <li className="profile-listitem">
          <label>
            Skill:
            <input
              type="text"
              value={newSkill.name}
              onChange={(e) => handleSkillChange("name", e.target.value)}
            />
          </label>
        </li>
        <li className="profile-staritem">
          <Rating
            rating={newSkill.rating}
            onRatingChange={(value) => handleSkillChange("rating", value)}
          />
        </li>
        <button className="profile-add" onClick={handleAddSkill}>
          Add
        </button>
        <hr className="solid"></hr>
        {skills.map((skill, index) => (
          <React.Fragment key={index}>
            <li className="profile-listitem">
              <label>Skill: {skill.name}</label>
            </li>
            <li className="profile-staritem">
              <Rating rating={skill.rating} />
            </li>
          </React.Fragment>
        ))}
        <hr className="solid"></hr>
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

Step2.propTypes = {
  onNext: PropTypes.func.isRequired,
  onPrev: PropTypes.func.isRequired,
};
