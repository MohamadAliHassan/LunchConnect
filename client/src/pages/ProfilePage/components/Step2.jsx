import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import { useState } from "react";

export const Step2 = ({ onNext }) => {
    const [skills, setSkills] = useState(null)

    const handleNext = () => {
        onNext({skills})
    };

    return (
        <>
            <h1>2/3</h1>
            <h1>Create Profile</h1>
            <div className="profilewrapper">
                <h3>What are your skills? (Max 5)</h3>
                <ul>
                    <li>
                        <label>
                            Profession:
                            <input type="text"></input>
                        </label>
                    </li>
                    <li>
                        <label>
                            Branch:
                            <input type="text"></input>
                        </label>
                    </li>
                    <li>
                        <label>
                            Skill:
                            <input type="text"></input>
                        </label>
                    </li>
                    <li>
                        <label>
                            How Skilled are you?
                            <ol className="five-stars">
                                <li className="star" value="5"></li>
                                <li className="star" value="4"></li>
                                <li className="star" value="3"></li>
                                <li className="star" value="2"></li>
                                <li className="star" value="1"></li>
                            </ol>
                        </label>
                    </li>
                </ul>
            </div>
            <button onClick={handleNext}>Next</button>
        </>
    )
}

Step2.propTypes = {
    onNext: PropTypes.func.isRequired,
};