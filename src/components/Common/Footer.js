import React from "react";

// Footer Component
const Footer = () => {
  return (
    <footer className="footer-wrapper">
      <p className="footer-item">
        © 2023-24 Dan McCarthy | Hosted on
        <a
          target="_blank"
          rel="noreferrer"
          href="https://github.com/dmccrthy/www.dmccarthy.org"
        >
          GitHub
        </a>
      </p>
      <hr className="gradient-bar" />
    </footer>
  );
};

export default Footer;
