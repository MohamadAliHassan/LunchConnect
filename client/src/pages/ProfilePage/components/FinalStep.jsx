import React from "react";
import PropTypes from "prop-types";

export const FinalStep = ({ formData, onConfirm, onPrev }) => {
    const handleConfirm = () => {
        onConfirm();
    }

    return (
        <>
            <h1>Does this look right?</h1>
            <h1>Verify Details</h1>

            <div className="formdata">
                {formData.profilePicture && (
                    <div>
                        <img src={formData.profilePicture} alt="Profile Preview" style={{ maxWidth: "14em" }} />
                    </div>
                )}
                {formData.description && (
                    <div>
                        <p>{formData.description}</p>
                    </div>
                )}
            </div>

            <button onClick={handleConfirm}>Confirm</button>
            <button onClick={onPrev}>Back</button>
        </>
    )
}

FinalStep.propTypes = {
    formData: PropTypes.object.isRequired,
    onConfirm: PropTypes.func.isRequired,
    onPrev: PropTypes.func.isRequired,
};