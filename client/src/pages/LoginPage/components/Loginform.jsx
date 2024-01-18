import { FaLinkedin } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import { RiBankFill } from "react-icons/ri";
export const Loginform = () => {
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
            <div className="overlay">
              <p>
                Sign in with BankID
                <RiBankFill style={{ margin: "0 10px" }} />
              </p>
            </div>
            <div className="overlay-2 ">
              <p>
                Sign in with LinkedIn
                <FaLinkedin style={{ margin: "0 10px" }} />
              </p>
            </div>
            <div className="overlay-3 ">
              <p>
                Sign in with Google
                <FaGoogle style={{ margin: "0 11px" }} />
              </p>
            </div>
          </div>
          <p>
            No account? <span className="bold-txt">Signup here</span>
          </p>
        </form>
      </div>
    </>
  );
};
