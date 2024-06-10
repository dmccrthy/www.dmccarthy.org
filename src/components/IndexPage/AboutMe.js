import React from "react";

import me from "@img/me.jpg";

import "@styles/components/AboutMe.scss";

const AboutMe = () => {
  return (
    <div className="about-background">
      <div className="about">
        <div className="about-text">
          <h1>And I'm a ...</h1>
          <p>
            Hi, my name is Dan and I'm a CS Major interested in all things
            programming. I’m currently working towards a BS in Computer Science
            at the University of New Hampshire and in my free time I like to
            work on various projects which I post on my github.
          </p>
        </div>
        <div className="about-image d-none d-lg-block">
          <img src={me} />
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
