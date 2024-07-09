// Packages
import React from "react";
import { ReactTyped } from "react-typed";

// Styles
import "@styles/components/PageHeader.scss";

// Images
import linkedin from "@img/icons/linkedin.svg";
import github from "@img/icons/github.svg";
import headshot from "@img/headshot.jpg";

const PageHeader = () => {
  return (
    <div className="page-header">
      <div className="lg-head">
        <div className="head">
          <p>Hi, I'm</p>
          <h1>
            <ReactTyped
              strings={["Dan McCarthy"]}
              typeSpeed={90}
              showCursor={false}
            />
          </h1>
          <hr></hr>
        </div>
        <div className="socials">
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.linkedin.com/in/danmcc/"
          >
            <img className="linkedin" src={linkedin} />
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://github.com/dmccrthy"
          >
            <img className="git" src={github} />
          </a>
        </div>
      </div>
      <div className="photo-container">
        <img src={headshot} />
      </div>
    </div>
  );
};

export default PageHeader;
