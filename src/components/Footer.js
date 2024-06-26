// Packages
import React from "react";

// Styles
import "@styles/components/Footer.scss";

// Images
import logo from "@img/footer.png";

const Footer = () => {
  return (
    <>
      <div className="footer-wrapper">
        <div className="footer-item">
          <img src={logo} alt="danmc" />
          <p>© Dan McCarthy 2023-24</p>
          <p>|</p>
          <p>
            Hosted on{" "}
            <a
              target="_blank"
              rel="noreferrer"
              href="https://github.com/dmccrthy/dmccrthy.github.io"
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
