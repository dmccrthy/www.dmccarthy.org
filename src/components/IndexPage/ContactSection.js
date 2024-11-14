import React from "react";

import linkedin from "@img/icons/linkedin.svg";
import github from "@img/icons/github.svg";

const ContactSection = () => {
  return (
    <section className="container main-bg">
      <h2 className="header">Want to Get in Touch?</h2>
      <div className="contact-content alt-bg">
        <h3>Send me a message</h3>
        <a
          target="_blank"
          rel="noreferrer"
          href="mailto:info@dmccarthy.org"
          className="h2 link-tag red-hover"
        >
          info@dmccarthy.org
        </a>
      </div>
      {/* TODO: Convert Account Links to Component */}
      <div className="account-links">
        <a
          target="_blank"
          rel="noreferrer"
          href="https://github.com/dmccrthy"
          className="link-tag green-hover"
        >
          <img className="icon link-icon" src={github} alt="" />
          <h3>Github</h3>
        </a>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.linkedin.com/in/danmcc/"
          className="link-tag blue-hover"
        >
          <img className="icon link-icon red-hover" src={linkedin} alt="" />
          <h3>LinkedIn</h3>
        </a>
        {/* <a
          target="_blank"
          rel="noreferrer"
          href="mailto:info@dmccarthy.org"
          className="link-tag filter-yellow"
        >
          <img className="link-icon" />
          <h3>Email</h3>
        </a> */}
      </div>
    </section>
  );
};

export default ContactSection;
