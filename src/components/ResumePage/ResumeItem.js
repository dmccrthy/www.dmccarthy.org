import React from "react";

const ResumeItem = ({ header, subtitle, image, content }) => {
  return (
    <div className="resume-item">
      <img className="item-img" src={image} />
      <div classname="item-text">
        <h1>{header}</h1>
        <h2>{subtitle}</h2>
        <p>{content}</p>
      </div>
    </div>
  );
};

export default ResumeItem;
