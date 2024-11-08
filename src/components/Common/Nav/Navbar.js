import React from "react";
import { motion } from "framer-motion";

import MobileNav from "./MobileNav";
import NavLink from "./NavLink";

import sun from "@img/icons/sun.svg";
import moon from "@img/icons/moon.svg";

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
        {/* <Link className="h1" id="site-icon" to="/">
          dan m
        </Link> */}
        <NavLink target="/" label="Home" color="red-hover" />
        <NavLink target="/resume" label="Resume" color="green-hover" />
        <NavLink target="/projects" label="Projects" color="yellow-hover" />
        <NavLink target="/posts" label="Posts" color="blue-hover" />

        <motion.div whileHover={{ y: 5 }} onClick={toggle}>
          {theme === "dark" ? (
            <img class="icon nav-icon" src={moon} alt="" />
          ) : (
            <img class="icon nav-icon" src={sun} alt="" />
          )}
        </motion.div>
      </nav>
    </>
  );
};

export default Navbar;
