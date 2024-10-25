import React from "react";
import { ReactTyped } from "react-typed";
import { motion } from "framer-motion";

const PageHeader = () => {
  // Scroll Page on click
  function scrollPage() {
    const element = document.getElementById("scroll");

    element.scrollIntoView(true, { behavior: "smooth" });
  }

  return (
    <div className="page-header">
      <div>
        <div className="header-text">
          <p>Hi, I'm</p>
          <h1>
            <ReactTyped strings={["Dan McCarthy"]} typeSpeed={90} />
          </h1>
          {/* TODO: Find a better way to do this */}
          <div className="header-bar">
            <div className="circle red" />
            <div className="circle green" />
            <div className="circle yellow" />
            <div className="circle blue" />
          </div>
        </div>
        {/* TODO: Move info row to component */}
        <div className="info-container">
          <div className="info-row">
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
              className="theme-icon"
            >
              <path d="M5.52 19c.64-2.2 1.84-3 3.22-3h6.52c1.38 0 2.58.8 3.22 3" />
              <circle cx="12" cy="10" r="3" />
              <circle cx="12" cy="12" r="10" />
            </svg>
            <h3>Software Developer</h3>
          </div>
          <div className="info-row">
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
              className="theme-icon"
            >
              <path d="M12 22s-8-4.5-8-11.8A8 8 0 0 1 12 2a8 8 0 0 1 8 8.2c0 7.3-8 11.8-8 11.8z" />
              <circle cx="12" cy="10" r="3" />
            </svg>
            <h3>New Hampshire</h3>
          </div>
        </div>
        <motion.div
          whileHover={{ y: 10 }}
          transition={{
            ease: "easeIn",
            duration: 0.25,
          }}
          onClick={scrollPage}
          id="scroll"
          className="arrow-container"
        >
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
            className="theme-icon"
          >
            <path d="M12 5v13M5 12l7 7 7-7" />
          </svg>
        </motion.div>
      </div>
    </div>
  );
};

export default PageHeader;
