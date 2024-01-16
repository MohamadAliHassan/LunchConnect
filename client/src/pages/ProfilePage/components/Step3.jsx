import { useState } from "react"

export const Step3 = ({ onNext }) => {
    const [description, setDescription] = useState()


    const handleDescription = (e) => {
        const text = e.target.value
        setDescription(text)
    }

    const handleNext = () => {
        onNext({ description })
    };

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
            <button onClick={handleNext}>Next</button>
        </>
    )
}