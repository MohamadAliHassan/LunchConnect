import { FaLinkedin } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import { RiBankFill } from "react-icons/ri";
import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";

import { TokenContext } from "../../../App";

export const Loginform = () => {
  const { token, setToken } = useContext(TokenContext);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [serverError, setServerError] = useState("");
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();
    setServerError("");

    const userData = {
      username,
      password,
    };

    try {
      const response = await fetch("/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      });

      const data = await response.json();
      if (response.ok) {
        setToken(data.token);
        navigate("/home");
      } else {
        setServerError(data.error);
        console.error("Inloggning misslyckades");
      }
    } catch (error) {
      console.error("Något gick fel:", error);
    }
  }

  return (
    <>
      <div className="login-container">
        <form onSubmit={handleSubmit}>
          <p className="server-error">{serverError}</p>
          <h2>Login</h2>
          <div className="form-wrapper">
            <div className="form-control">
              <input
                required
                placeholder="Username"
                type="text"
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className="form-control">
              <input
                required
                placeholder="Password"
                type="password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <p>Forgot Password?</p>
            <button className="Login-btn" type="submit">
              Login
            </button>
          </div>
          <div className="social-login">
            <div className="overlay-1">
              <p>
                BankID
                <RiBankFill style={{ margin: "0 10px" }} />
              </p>
            </div>
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
            No account?{" "}
            <span
              className="bold-txt"
              onClick={() => {
                navigate("/register");
              }}>
              Signup here
            </span>
          </p>
        </form>
      </div>
    </>
  );
};
