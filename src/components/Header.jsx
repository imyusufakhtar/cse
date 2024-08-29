import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import classnames from "classnames";

const Header = ({ selectedTab, setSelectedTab }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const handleLinkClick = (tab) => {
    setSelectedTab(tab);
    setIsOpen(false); // Close the sidebar
  };

  return (
    <>
      <button
        className="toggle-btn"
        id="toggle-btn"
        onClick={toggleSidebar}
        aria-expanded={isOpen}
        aria-controls="sidebar"
      >
        ☰
      </button>
      <div className={classnames("header", { open: isOpen })} id="sidebar">
        <div className="header-img">
          <Link to="/" onClick={() => handleLinkClick("Home")}>
            <img src="image.jpg" alt="Profile" />
          </Link>
        </div>
        <ul className="header-menu">
          <li onClick={() => handleLinkClick("Home")}>
            <NavLink to="/" className={({ isActive }) => (isActive ? "active" : "")}>
              Home
            </NavLink>
          </li>
          <li onClick={() => handleLinkClick("About")}>
            <NavLink to="/about-me" className={({ isActive }) => (isActive ? "active" : "")}>
              About Me
            </NavLink>
          </li>
          <li onClick={() => handleLinkClick("Education")}>
            <NavLink to="/education" className={({ isActive }) => (isActive ? "active" : "")}>
              Education
            </NavLink>
          </li>
          <li onClick={() => handleLinkClick("Experience")}>
            <NavLink to="/experience" className={({ isActive }) => (isActive ? "active" : "")}>
              Experience
            </NavLink>
          </li>
          <li onClick={() => handleLinkClick("Projects")}>
            <NavLink to="/projects" className={({ isActive }) => (isActive ? "active" : "")}>
              Projects
            </NavLink>
          </li>
          <li onClick={() => handleLinkClick("Contact")}>
            <NavLink to="/contact" className={({ isActive }) => (isActive ? "active" : "")}>
              Contact
            </NavLink>
          </li>
        </ul>
        <p className="header-extra">&copy; 2024 All rights reserved.</p>
      </div>
    </>
  );
};

export default Header;
