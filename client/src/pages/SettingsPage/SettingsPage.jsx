import { useState } from "react";

export const SettingsPage = () => {
    const [profileData, setProfileData] = useState(JSON.parse(localStorage.getItem("profileData")) || {});
    const { profilePicture, fullName, company, position, description, password, username} = profileData;

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setProfileData(prevData => ({
            ...prevData,
            [name]: value
        }));
    };

    
    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setProfileData(prevData => ({
                    ...prevData,
                    profilePicture: reader.result
                }));
            };
            reader.readAsDataURL(file);
        }
    };
    
    const handleSave = () => {
        localStorage.setItem("profileData", JSON.stringify(profileData));
        alert("Successfully saved!")
    };

    return (
        <div className="settings-container">
            <div className="settings-header">
                <img src={profilePicture}></img>
                <h1>Hello {fullName}!</h1>
            </div>
            <div className="settings-main">
                <ul className="settings-inputs">
                    <li className="settings-listitem">
                        <label htmlFor="name">Full Name</label>
                        <input type="text" name="fullName" id="fullName" placeholder={fullName} value={fullName} onChange={handleInputChange}/>
                    </li>
                    <li className="settings-listitem">
                        <label htmlFor="name">Username</label>
                        <input type="text" name="username" id="username" placeholder={username} value={username} onChange={handleInputChange}/>
                    </li>
                    <li className="settings-listitem">
                        <label htmlFor="password">Password</label>
                        <input type="password" name="password" id="password"/>
                    </li>
                    <li className="settings-listitem">
                        <label htmlFor="password">Confirm Password</label>
                        <input type="password" name="cfrpassword" id="cfrpassword"/>
                    </li>
                    <li className="settings-listitem">
                        <label htmlFor="company">Company</label>
                        <input type="text" name="company" id="company" placeholder={company} value={company} onChange={handleInputChange}/>
                    </li>
                    <li className="settings-listitem">
                        <label htmlFor="position">Position</label>
                        <input type="text" name="position" id="position" placeholder={position} value={position} onChange={handleInputChange}/>
                    </li>
                </ul>
                <label id="description-label" htmlFor="description">Bio</label>
                <input type="text" name="description" id="description" placeholder={description} value={description} onChange={handleInputChange}/>
                <button className="settings-save-btn" onClick={handleSave}>Save</button>
            </div>
        </div>
    );
};
