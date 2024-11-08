import React from "react";
import { Link } from "gatsby";
import { ReactTyped } from "react-typed";
import { AnimateText } from "@components/Common/AnimateText";

// Images
import headshot from "@img/headshot.jpg";

const AboutMe = () => {
  return (
    <section className="container alt-bg">
      {/* id "scroll" is for scroll button */}
      <AnimateText classes={["h2", "header"]} text="About Me:" />
      <img
        className="about-image"
        src={headshot}
        alt="Picture of Dan McCarthy"
      />
      <div className="about-content">
        <h3 id="scroll">
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
          in all things software development, and cybersecurity. I’m currently
          working towards a BS in Computer Science at the University of New
          Hampshire and in my free time I like to work on different projects in
          a number of different languages which you can find on my github.
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
