import React, { useState, useRef, useEffect } from "react";
import { MdOutlineChat } from "react-icons/md";
import { FaUser } from "react-icons/fa";

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const clearStorage = () => {
    localStorage.clear();
  }
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
          onClick={toggleMenu}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>

        {isOpen && (
          <div className="menu-items">
            <a href="/">Home</a>
            <a href="/about">Achievements</a>
            <a href="/contact">Profile</a>
            <a href="/">Logout</a>
            <a href="/" onClick={clearStorage}>Clear storage</a>

          </div>
        )}
        <div className="icons">
          <MdOutlineChat size={50} />
          <FaUser size={45} />
        </div>
      </div>
    </>
  );
};
