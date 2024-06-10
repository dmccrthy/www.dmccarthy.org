import React from "react";
import { Link } from "gatsby";

import projects from "/src/img/projects.png";
import games from "/src/img/games.png";
import writing from "/src/img/writing.png";
import screen from "/src/img/icons/screen.svg";
import gamepad from "/src/img/icons/game.svg";
import docs from "/src/img/icons/docs.svg";

import "@styles/components/MoreSection.scss";

const MoreSection = () => {
  return (
    <>
      <div className="more-header">
        <h1>Links</h1>
      </div>
      <div className="more-wrapper">
        <div className="more-box">
          <img className="more-image" src={screen} />
          <h1>Projects</h1>
          <Link className="image" to="/projects">
            <img src={projects} />
          </Link>
        </div>
        <div className="more-box">
          <img className="more-image" src={gamepad} />
          <h1>Games</h1>
          <a
            className="image"
            target="_blank"
            rel="noreferrer"
            href="https://danmc.itch.io/"
          >
            <img src={games} />
          </a>
        </div>
        <div className="more-box">
          <img className="more-image" src={docs} />
          <h1>Blog</h1>
          <Link className="image" to="/posts">
            <img src={writing} />
          </Link>
        </div>
      </div>
    </>
  );
};

export default MoreSection;
