// Packages
import React from "react";
import { Link } from "gatsby";
import { useEffect } from "react";

// Styles
import "@styles/components/Navbar.scss";

import test from "@img/danmc1.svg";

const Navbar = () => {
  return (
    <>
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
        </nav>
      </div>
    </>
  );
};

export default Navbar;
