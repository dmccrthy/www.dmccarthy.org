import React from "react";
import { ReactTyped } from "react-typed";

const AboutHeader = () => {
  return (
    <h1>
      <span>And I'm </span>
      <ReactTyped
        strings={[
          "a Student",
          "a Developer",
          "a Mentor",
          "a Programmer",
          "a Designer",
          "an Artist",
        ]}
        typeSpeed={50}
        backSpeed={40}
        loop
        className="highlight"
      />
    </h1>
  );
};

export default AboutHeader;
