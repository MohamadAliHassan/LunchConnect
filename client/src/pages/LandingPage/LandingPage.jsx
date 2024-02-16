import { useNavigate } from "react-router-dom";
import lunchconnect_mini_logo from "./assets/lunchconnect_mini_logo.png";

export const LandingPage = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="container">
        <div className="Logo-container">
          <img src={lunchconnect_mini_logo} alt="Logo" />
        </div>
        <h2>
          Welcome to Lunch<span>Connect!</span>
        </h2>
        <div className="btn-container">
          <button
            type="submit"
            className="login-btn"
            onClick={() => {
              navigate("/login");
            }}>
            Login
          </button>
          <button
            type="submit"
            className="SignUp-btn"
            onClick={() => {
              navigate("/register");
            }}>
            Sign Up
          </button>
        </div>
      </div>
    </>
  );
};
