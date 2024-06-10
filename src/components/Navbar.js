import React from "react";
import { Link } from "gatsby";

import "@styles/components/Navbar.scss";

const Navbar = () => {
  return (
    <>
      <div className="gradient-bar" />
      <div className="nav-wrapper">
        <nav className="nav-bar">
          <Link to="/">
            <h1 className="orange">Home</h1>
          </Link>
          <Link to="/resume">
            <h1 className="red">Resume</h1>
          </Link>
          <Link to="/projects">
            <h1 className="pink">Projects</h1>
          </Link>
          <Link to="/posts">
            <h1 className="purple"> Blog</h1>
          </Link>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
