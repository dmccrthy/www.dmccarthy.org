// Packages
import React from "react";
import { ReactTyped } from "react-typed";

// Styles
import "@styles/components/PageHeader.scss";

// images
import briefcase from "@img/icons/briefcase.svg";
import pin from "@img/icons/marker.svg";

const PageHeader = () => {
  return (
    <div className="page-header">
      <div className="lg-head">
        <div className="head">
          <p>Hi, I'm</p>
          <h1>
            <ReactTyped strings={["Dan McCarthy"]} typeSpeed={90} />
          </h1>
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
            <img src={briefcase} />
            <h3>Software Developer</h3>
          </div>
          <div className="info-row">
            <img src={pin} />
            <h3>New Hampshire</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageHeader;
