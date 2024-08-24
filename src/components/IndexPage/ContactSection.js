// Packages
import React from "react";

// Styles
import "@styles/components/ContactSection.scss";

// Images
import linkedin from "@img/icons/linkedin.svg";
import github from "@img/icons/github.svg";
import mail from "@img/icons/mail.svg";

const ContactSection = () => {
  return (
    <div className="contact-wrapper">
      <div className="contact-header">
        <h2>Get in Contact:</h2>
      </div>
      <div className="contact-content">
        <div className="form-container">
          <form
            action="mailto:info@dmccarthy.org"
            method="get"
            enctype="text/plain"
            className="main-form"
          >
            <div>
              <h3>Subject:</h3>
              <input
                type="text"
                name="subject"
                placeholder="Message Subject"
              ></input>
            </div>
            <div>
              <h3>Email:</h3>
              <input type="email" name="email" placeholder="Your Email"></input>
            </div>
            <div>
              <h3>Message:</h3>
              <input name="body" placeholder="Your Message"></input>
            </div>
            <button type="submit" value="Send" className="submit-button">
              <h4>Send</h4>
            </button>
          </form>
        </div>
        {/* TODO: Convert Account Links to Component */}
        <div className="account-links">
          <a
            target="_blank"
            rel="noreferrer"
            href="https://github.com/dmccrthy"
            className="link-tag filter-red"
          >
            <img className="link-icon" src={github} />
            <h3>Github</h3>
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.linkedin.com/in/danmcc/"
            className="link-tag filter-green"
          >
            <img className="link-icon" src={linkedin} />
            <h3>LinkedIn</h3>
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href="mailto:info@dmccarthy.org"
            className="link-tag filter-yellow"
          >
            <img className="link-icon" src={mail} />
            <h3>Email</h3>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
