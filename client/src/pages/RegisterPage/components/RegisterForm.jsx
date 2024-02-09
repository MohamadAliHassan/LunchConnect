import { useState } from "react";
import { FaLinkedin } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
export const RegisterForm = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [rptPassword, setRptPassword] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();

    console.log("Username: " + username + ", Password: " + password + ", Repeat: " + rptPassword)
    if (password !== rptPassword) {
      alert("Passwords do not match!");
      return;
    }
    
    localStorage.setItem("profileData", JSON.stringify({ username, password }));

    navigate("/createprofile");
  }
  
  return (
    <>
      <div className="register-container">
        <form onSubmit={handleSubmit}>
          <h2>Register</h2>
          <div className="form-wrapper">
            <div className="form-control">
              <input required placeholder="Username" className="reg-input" type="text" value={username} onChange={(e) => {setUsername(e.target.value)}}/>
            </div>
            <div className="form-control">
              <input required placeholder="Password" className="reg-input" type="password" value={password} onChange={(e) => {setPassword(e.target.value)}}/>
            </div>
            <div className="form-control">
              <input required placeholder="Repeat password" className="reg-input" type="password" value={rptPassword} onChange={(e) => {setRptPassword(e.target.value)}}/>
            </div>
            <p>Forgot Password?</p>
            <button className="Login-btn" type="submit">
              Sign Up
            </button>
          </div>
          <div className="social-login">
            <div className="overlay-2 ">
              <p>
                LinkedIn
                <FaLinkedin style={{ margin: "0 10px" }} />
              </p>
            </div>
            <div className="overlay-3 ">
              <p>
                Google
                <FaGoogle style={{ margin: "0 11px" }} />
              </p>
            </div>
          </div>
          <p>
            Already an account?{" "}
            <span
              className="bold-txt"
              onClick={() => {
                navigate("/login");
              }}>
              Sign in here
            </span>
          </p>
        </form>
      </div>
    </>
  );
};
