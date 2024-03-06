import React from "react";
import lunchconnect_logo from "../assets/lunchconnect_logo.png";
import { useNavigate } from "react-router-dom";

export const Header = () => {
  const navigate = useNavigate();
  return (
    <div className="first-header">
      <img
        className="lunchconnect-logo"
        src={lunchconnect_logo}
        onClick={() => navigate("/")}
      />
    </div>
  );
};
