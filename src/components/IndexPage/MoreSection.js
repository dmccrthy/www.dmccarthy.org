// Packages
import React from "react";
import { Link } from "gatsby";

// Styles
import "@styles/components/MoreSection.scss";

// Images
import projects from "@img/projects.png";
import games from "@img/games.png";
import writing from "@img/writing.png";
import screen from "@img/icons/screen.svg";
import gamepad from "@img/icons/game.svg";
import docs from "@img/icons/docs.svg";

const MoreSection = () => {
  return (
    <div className="more-wrapper">
      <div className="more-header">
        <h1>Links</h1>
      </div>
      <div className="more-content">
        <div className="more-box">
          <img className="more-icon" src={screen} />
          <h1>Projects</h1>
          <Link className="more-image" to="/projects">
            <img src={projects} />
          </Link>
        </div>
        <div className="more-box">
          <img className="more-icon" src={gamepad} />
          <h1>Games</h1>
          <a
            className="more-image"
            target="_blank"
            rel="noreferrer"
            href="https://danmc.itch.io/"
          >
            <img src={games} />
          </a>
        </div>
        <div className="more-box">
          <img className="more-icon" src={docs} />
          <h1>Blog</h1>
          <Link className="more-image" to="/posts">
            <img src={writing} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MoreSection;
