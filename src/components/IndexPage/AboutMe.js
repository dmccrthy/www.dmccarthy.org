// Packages
import React from "react";

// Components
import AboutHeader from "@components/IndexPage/AboutHeader";

// Styles
import "@styles/components/AboutMe.scss";

// Images
import headshot from "@img/headshot.jpg";

const AboutMe = () => {
  return (
    <div className="about-background">
      <h2 className="header">About Me:</h2>
      <div className="about">
        <div className="about-text">
          <AboutHeader />
          <p>
            Hi again! My name is Dan and I'm a Computer Science student
            interested in all things software development. I’m currently working
            towards a BS in Computer Science at the University of New Hampshire
            and in my free time I like to work on different projects usually in
            Python or Javascript.
          </p>
        </div>
        <div className="about-image">
          <img src={headshot} />
        </div>
      </div>
      {/* <div className="about-resume">
        <h3>Checkout My Resume -</h3>
        <button>My Resume</button>
      </div> */}
    </div>
  );
};

export default AboutMe;
