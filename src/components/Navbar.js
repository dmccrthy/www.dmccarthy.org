// Packages
import React from "react";
import { Link } from "gatsby";

// Styles
import "@styles/components/Navbar.scss";

const Navbar = () => {
  return (
    <>
      <div className="gradient-bar" />
      <div className="nav-wrapper">
        <nav className="nav-bar">
          <Link to="/">
            <h1 className="color-1">Home</h1>
          </Link>
          <Link to="/resume">
            <h1 className="color-2">Resume</h1>
          </Link>
          <Link to="/projects">
            <h1 className="color-3">Projects</h1>
          </Link>
          <Link to="/posts">
            <h1 className="color-4"> Blog</h1>
          </Link>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
