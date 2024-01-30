import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
export const RegisterForm = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="register-container">
        <form>
          <h2>Register</h2>
          <div className="form-wrapper">
            <div className="form-control">
              <input placeholder="Username" className="reg-input" />
            </div>
            <div className="form-control">
              <input placeholder="Password" className="reg-input" />
            </div>
            <div className="form-control">
              <input placeholder="Repeat password" className="reg-input" />
            </div>
            <p>Forgot Password?</p>
            <button className="Login-btn">Sign Up</button>
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
              }}
            >
              Sign in here
            </span>
          </p>
        </form>
      </div>
    </>
  );
};
