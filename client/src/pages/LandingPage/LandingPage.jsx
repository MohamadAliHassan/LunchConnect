import { useNavigate } from "react-router-dom";

export const LandingPage = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="container">
        <div className="Logo-container">
          <img src="" alt="Logo" />
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
            }}
          >
            Login
          </button>
          <button
            type="submit"
            className="SignUp-btn"
            onClick={() => {
              navigate("/register");
            }}
          >
            Sign Up
          </button>
        </div>
      </div>
    </>
  );
};
