// Packages
import React, { useContext } from "react";
import { Link } from "gatsby";

// Styles
import "@styles/components/Navbar.scss";

import sun from "@img/icons/sun.svg";
import moon from "@img/icons/moon.svg";

/**
 * Component for website navbar
 * @param {Function} toggle toggles them from light to dark
 * @returns {Object} Site Navbar
 */
const Navbar = ({ theme, toggle }) => {
  return (
    <div id="nav" className="nav-wrapper">
      <nav className="nav-bar">
        {/* <img src={test} /> */}
        <Link to="/" className="color-1">
          Home
        </Link>
        <Link to="/resume" className="color-2">
          Resume
        </Link>
        <Link to="/projects" className="color-3">
          Projects
        </Link>
        <Link to="/posts" className="color-4">
          Blog
        </Link>
        <button class="nav-icon" onClick={toggle}>
          {theme == "dark" ? <img src={moon} /> : <img src={sun} />}
        </button>
      </nav>
    </div>
  );
};

export default Navbar;
