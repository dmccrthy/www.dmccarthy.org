import React from "react";
import logo from "@img/footer.png";

import "@styles/components/Footer.scss";

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
