import React from "react";

import linkedin from "@img/icons/linkedin.svg";
import github from "@img/icons/github.svg";

import "@styles/components/PageHeader.scss";

const PageHeader = () => {
  return (
    <div className="page-header">
      <p>Hi, I'm</p>
      <h1 className="text">Dan McCarthy</h1>
      <hr></hr>
      <div className="socials">
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.linkedin.com/in/danmcc/"
        >
          <img className="linkedin" src={linkedin} />
        </a>
        <a target="_blank" rel="noreferrer" href="https://github.com/dmccrthy">
          <img className="git" src={github} />
        </a>
      </div>
    </div>
  );
};

export default PageHeader;
