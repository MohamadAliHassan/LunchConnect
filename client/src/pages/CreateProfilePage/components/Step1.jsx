import React, { useState } from "react";
import PropTypes from "prop-types";

export const Step1 = ({ onNext }) => {
  const [profilePicture, setProfilePicture] = useState(null);
  const [fullName, setFullName] = useState("");

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfilePicture(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleFullNameChange = (e) => {
    setFullName(e.target.value);
  };

  const handleNext = () => {
    localStorage.setItem("profilePicture", profilePicture);
    onNext({ fullName });
  };

  return (
    <>
      <h1 className="createprofile-header">1/3</h1>
      <h1 className="createprofile-header">Create Profile</h1>
      {profilePicture && (
        <img
          className="createprofile-img"
          src={profilePicture}
          alt="Profile Preview"
        />
      )}
      <div className="createprofile-pic">
        <input
          className="hidden"
          type="file"
          id="files"
          accept="image/*"
          onChange={handleFileChange}
        />
        <label htmlFor="files">Upload picture</label>
      </div>
      <div className="createprofile-fullname">
        <label>
          <p>Full Name</p>
          <input type="text" value={fullName} onChange={handleFullNameChange} />
        </label>
      </div>
      <button className="createprofile-next" onClick={handleNext}>
        Next
      </button>
    </>
  );
};

Step1.propTypes = {
  onNext: PropTypes.func.isRequired,
};
