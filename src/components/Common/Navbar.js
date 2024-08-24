// Packages
import React from "react";
import { Link } from "gatsby";

// Styles
import "@styles/components/Navbar.scss";

// Images
import sun from "@img/icons/sun.svg";
import moon from "@img/icons/moon.svg";

/**
 * Component for website navbar
 * @param {Function} toggle toggles them from light to dark
 * @returns {Object} Site Navbar
 */
const Navbar = ({ theme, toggle }) => {
  // Mobile Dropdown Toggle
  function updateDropdown() {
    document.getElementById("dropdown").classList.toggle("hide");
  }

  return (
    <div id="nav" className="nav-wrapper">
      {/* Mobile Nav */}
      <ul id="dropdown" className="hide mobile-dropdown">
        <Link to="/">
          <h3 className="color-1">Home</h3>
        </Link>
        <Link to="/resume">
          <h3 className="color-2">Resume</h3>
        </Link>
        <Link to="/projects">
          <h3 className="color-3">Projects</h3>
        </Link>
        <Link to="/posts">
          <h3 className="color-4">Blog</h3>
        </Link>
      </ul>
      <button
        className="nav-button"
        onClick={updateDropdown}
        aria-label="Nav Button"
      />
      {/* Desktop Nav */}
      <nav className="nav-bar">
        {/* <img src={test} /> */}
        <Link to="/">
          <h3 className="color-1">Home</h3>
        </Link>
        <Link to="/resume">
          <h3 className="color-2">Resume</h3>
        </Link>
        <Link to="/projects">
          <h3 className="color-3">Projects</h3>
        </Link>
        <Link to="/posts">
          <h3 className="color-4">Blog</h3>
        </Link>
        <button class="nav-icon" onClick={toggle}>
          {theme === "dark" ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#000000"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#000000"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <circle cx="12" cy="12" r="5" />
              <path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
            </svg>
          )}
        </button>
      </nav>
    </div>
  );
};

export default Navbar;
