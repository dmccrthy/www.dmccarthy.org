import React from "react";
import { motion } from "framer-motion";
import { AnimateText } from "@components/Common/AnimateText";

import person from "@img/icons/person.svg";
import pin from "@img/icons/pin.svg";
import arrow from "@img/icons/arrow.svg";

const PageHeader = () => {
  // Scroll Page on click
  function scrollPage() {
    const element = document.getElementById("scroll");

    element.scrollIntoView(true, { behavior: "smooth" });
  }

  return (
    <div className="page-header main-bg">
      <div>
        <div className="header-text">
          <p>Hi, I'm</p>
          <AnimateText classes={["h1"]} text="Dan McCarthy">
            Dan McCarthy
          </AnimateText>
          {/* <ReactTyped
            className="h1"
            strings={["Dan McCarthy"]}
            typeSpeed={90}
          /> */}
          <div className="header-bar">
            <span className="circle red-bg" />
            <span className="circle green-bg" />
            <span className="circle yellow-bg" />
            <span className="circle blue-bg" />
          </div>
        </div>
        {/* TODO: Move info row to component */}
        <div className="info-container">
          <div className="info-row">
            <img className="icon theme-icon" src={person} alt="" />
            <h3>Software Developer</h3>
          </div>
          <div className="info-row">
            <img className="icon theme-icon" src={pin} alt="" />
            <h3>New Hampshire</h3>
          </div>
        </div>
        <motion.div
          whileHover={{ y: 10 }}
          transition={{
            ease: "easeIn",
            duration: 0.25,
          }}
          onClick={scrollPage}
          id="scroll"
          className="arrow-container"
        >
          <img className="icon theme-icon" src={arrow} alt="" />
        </motion.div>
      </div>
    </div>
  );
};

export default PageHeader;
