import React, { useState } from "react";
import PropTypes from "prop-types";

export const Step1 = ({ onNext }) => {
    const [profilePicture, setProfilePicture] = useState(null);

    const handleFileChange = (e) => {
        const file = e.target.files[0]
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setProfilePicture(reader.result);
            };
            reader.readAsDataURL(file)
        }
    }

    const handleNext = () => {
        onNext({ profilePicture })
    };

    return (
        <>
            <h1 className="profile-header">1/3</h1>
            <h1 className="profile-header">Create Profile</h1>
            {profilePicture && <img className="profile-img" src={profilePicture} alt="Profile Preview" />}
            <div className="profile-pic">
                <input className="hidden" type="file" id="files" accept="image/*" onChange={handleFileChange} />
                <label htmlFor="files">Upload picture</label>
            </div>
            <button className="profile-next" onClick={handleNext}>Next</button>
        </>
    )
}

Step1.propTypes = {
    onNext: PropTypes.func.isRequired,
};