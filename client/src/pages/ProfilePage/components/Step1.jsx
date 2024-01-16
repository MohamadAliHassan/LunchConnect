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
            <h1>1/3</h1>
            <h1>Create Profile</h1>
            {profilePicture && <img src={profilePicture} alt="Profile Preview" style={{ maxWidth: "14em" }} />}
            <label>
                Upload Profile Picture:
                <input type="file" accept="image/*" onChange={handleFileChange} />
            </label>
            <button onClick={handleNext}>Next</button>
        </>
    )
}

Step1.propTypes = {
    onNext: PropTypes.func.isRequired,
};