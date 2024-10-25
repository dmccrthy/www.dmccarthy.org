import React from "react";
import { Link } from "gatsby";
import { ReactTyped } from "react-typed";

// Images
import headshot from "@img/headshot.jpg";

const AboutMe = () => {
  return (
    <section className="about-container">
      {/* id "scroll" is for scroll button */}
      <h2 className="about-header" id="scroll">
        About Me:
      </h2>
      <div className="about-image">
        <img src={headshot} />
      </div>
      <div className="about-content">
        <h3>
          I'm{" "}
          <ReactTyped
            strings={[
              "a Student",
              "a Developer",
              "a Leader",
              "a Programmer",
              "a Designer",
            ]}
            typeSpeed={50}
            backSpeed={40}
            loop
            className="aqua"
          />
        </h3>
        <p>
          Hi again! My name is Dan and I'm a Computer Science student interested
          in all things software development. I’m currently working towards a BS
          in Computer Science at the University of New Hampshire and in my free
          time I like to work on different projects usually in Python or
          Javascript.
        </p>
      </div>

      {/* <div className="resume-link">
        <h4>Checkout My Resume -</h4>
        <Link to="/resume" className="button">
          My Resume
        </Link>
      </div> */}
    </section>
  );
};

export default AboutMe;
