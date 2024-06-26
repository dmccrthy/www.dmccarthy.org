import React from "react";
import { ReactTyped } from "react-typed";

const AboutHeader = () => {
  return (
    <h1>
      <span>And I'm </span>
      <ReactTyped
        strings={["a Student", "a Developer", "a Learner"]}
        typeSpeed={25}
        backSpeed={35}
        loop
      />
    </h1>
  );
};

export default AboutHeader;
