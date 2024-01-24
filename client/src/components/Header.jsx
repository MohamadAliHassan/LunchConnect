import { useState } from "react";
export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
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
            <a href="/contact">Logout</a>
          </div>
        )}
      </div>
    </>
  );
};
