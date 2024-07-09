// Packages
import React from "react";
import { Link } from "gatsby";
import { useEffect } from "react";

// Styles
import "@styles/components/Navbar.scss";

const Navbar = () => {
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScroll = () => {
    if (window.scrollY > 100) {
      document.getElementById("nav").classList.add("nav-background");
    } else {
      document.getElementById("nav").classList.remove("nav-background");
    }
  };

  return (
    <>
      <div id="nav" className="nav-wrapper">
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
