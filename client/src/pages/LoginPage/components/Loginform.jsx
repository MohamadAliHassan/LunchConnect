import { FaLinkedin } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import { RiBankFill } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
export const Loginform = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="login-container">
        <form>
          <h2>Login</h2>
          <div className="form-wrapper">
            <div className="form-control">
              <input placeholder="Username" />
            </div>
            <div className="form-control">
              <input placeholder="Password" />
            </div>
            <p>Forgot Password?</p>
            <button className="Login-btn">Login</button>
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
              }}
            >
              Signup here
            </span>
          </p>
        </form>
      </div>
    </>
  );
};
