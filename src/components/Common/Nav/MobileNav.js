import React, { useState } from "react";
import { Link } from "gatsby";

import { motion, AnimatePresence } from "framer-motion";
import burger from "@img/icons/hamburger.svg";

const MobileNav = () => {
  // Mobile Nav Menu State
  const [navOpen, setNavOpen] = useState(false);

  const navClick = () => {
    setNavOpen(!navOpen);
  };

  return (
    <>
      <AnimatePresence>
        {navOpen ? (
          <motion.nav id="dropdown" className="mobile-dropdown">
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
          </motion.nav>
        ) : null}
      </AnimatePresence>
      <button
        className="nav-button"
        onClick={navClick}
        aria-label="Mobile Nav Button"
      >
        <img src={burger} alt="" />
      </button>
    </>
  );
};

export default MobileNav;
