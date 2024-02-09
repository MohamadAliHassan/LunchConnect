import { useState } from "react";
import { MdOutlineChat } from "react-icons/md";
import { FaUser } from "react-icons/fa";
export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const clearStorage = () => {
    localStorage.clear();
  }

  return (
    <>
      <div className="hamburger-menu">
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
