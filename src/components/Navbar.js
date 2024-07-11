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
