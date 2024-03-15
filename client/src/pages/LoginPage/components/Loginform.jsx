import { FaLinkedin } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import { RiBankFill } from "react-icons/ri";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import fetchHelper from "../../../utils/fetchHelper";
import { useAuthContext } from "../../../Context/AuthContext";
import sessionService from "../../../utils/sessionService";

export const Loginform = () => {
  const { setAuthUser } = useAuthContext();
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
      const response = await fetchHelper("/login", "POST", userData);

      if (response.ok) {
        const data = await response.json();
        console.log(data);
        setAuthUser(data);
        sessionService.setToken(data.token);
        localStorage.setItem("chat-user", JSON.stringify(data));
        const userResponse = await fetchHelper("/user", "get");

        console.log(userResponse);

        if (userResponse.ok) {
          const userData = await userResponse.json();
          console.log("User data:", userData);
          if (userData.user.profileCompleted) {
            navigate("/home");
          } else {
            navigate("/createprofile");
          }
        }
      } else {
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
