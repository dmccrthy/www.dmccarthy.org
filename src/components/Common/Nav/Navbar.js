import React from "react";
import { motion } from "framer-motion";

import MobileNav from "./MobileNav";
import NavLink from "./NavLink";

/**
 * Component for website navbar
 * @param {String} theme Current theme value
 * @param {Function} toggle toggles them from light to dark theme
 * @returns {Object} Site Navbar
 */
const Navbar = ({ theme, toggle }) => {
  return (
    <>
      {/* Mobile Nav */}
      <MobileNav />

      {/* Desktop Nav */}
      <nav className="nav-bar">
        <NavLink target="/" label="Home" color="red-hover" />
        <NavLink target="/resume" label="Resume" color="green-hover" />
        <NavLink target="/projects" label="Projects" color="yellow-hover" />
        <NavLink target="/posts" label="Posts" color="blue-1-hover" />

        <motion.div whileHover={{ y: 5 }} class="nav-icon" onClick={toggle}>
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
        </motion.div>
      </nav>
    </>
  );
};

export default Navbar;
