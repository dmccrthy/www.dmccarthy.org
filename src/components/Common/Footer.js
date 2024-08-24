// Packages
import React from "react";

// Styles
import "@styles/components/Footer.scss";

// Footer Component
const Footer = () => {
  return (
    <>
      <div className="footer-wrapper">
        <div className="footer-item">
          <p>© 2023-24 Dan McCarthy</p>
          <p>|</p>
          <p>
            Hosted on{" "}
            <a
              target="_blank"
              rel="noreferrer"
              href="https://github.com/dmccrthy/www.dmccarthy.org"
            >
              GitHub
            </a>
          </p>
        </div>
      </div>
      <div className="gradient-bar" />
    </>
  );
};

export default Footer;
