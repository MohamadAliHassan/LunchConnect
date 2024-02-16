import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import { MdOutlineChat } from "react-icons/md";
import { FaUser } from "react-icons/fa";
import lunchconnect_logo from "../assets/lunchconnect_logo.png";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const clearStorage = () => {
    localStorage.clear();
  };
  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      <div className="hamburger-menu" ref={menuRef}>
        <div
          className={`menu-icon ${isOpen ? "open" : ""}`}
          onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>

        {isOpen && (
          <div className="menu-items">
            <Link to="/">Home</Link>
            <Link to="/achievements">Achievements</Link>
            <Link to="/contact">Profile</Link>
            <Link to="/">Logout</Link>
            <Link to="/" onClick={clearStorage}>
              Clear storage
            </Link>
          </div>
        )}
        <img className="lunchconnect-logo" src={lunchconnect_logo} />
        <div className="icons">
          <MdOutlineChat size={50} />
          <FaUser size={45} />
        </div>
      </div>
    </>
  );
};
