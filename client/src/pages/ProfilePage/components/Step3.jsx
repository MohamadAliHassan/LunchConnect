import { useState } from "react"
import { PropTypes } from "prop-types";

export const Step3 = ({ onNext, onPrev }) => {
    const [description, setDescription] = useState()


    const handleDescription = (e) => {
        const text = e.target.value
        setDescription(text)
    }

    const handleNext = () => {
        onNext({ description })
    };

    const handlePrev = () => {
        onPrev()
    }

    return (
        <>
            <h1>3/3</h1>
            <h1>Create Profile</h1>

            <div className="profile-description">
                <label>
                    Describe yourself, your background, interests, hobbies, etc.
                    <textarea rows="4" cols="50" onChange={handleDescription}></textarea>
                </label>
            </div>
            <button className="profile-next" onClick={handleNext}>Next</button>
            <button className="profile-back" onClick={handlePrev}>Previous</button>
        </>
    )
}

Step3.propTypes = {
    onNext: PropTypes.func.isRequired,
    onPrev: PropTypes.func.isRequired,
};