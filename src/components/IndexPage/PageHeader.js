// Packages
import React from "react";

// Styles
import "@styles/components/PageHeader.scss";

// Images
import linkedin from "@img/icons/linkedin.svg";
import github from "@img/icons/github.svg";
import headshot from "@img/headshot.jpg";

const PageHeader = () => {
  return (
    <div className="page-header">
      <div>
        <div className="head">
          <p>Hi, I'm</p>
          <h1>Dan McCarthy</h1>
          <hr></hr>
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
      </div>
      <div className="photo-container">
        <img className="headshot" src={headshot} />
      </div>
    </div>
  );
};

export default PageHeader;
