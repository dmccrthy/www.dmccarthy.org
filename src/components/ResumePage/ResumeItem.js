import React from "react";

const ResumeItem = ({ header, subtitle, image, content }) => {
  return (
    <div className="resume-item">
      <img className="item-img" src={image} />
      <div classname="item-text">
        <h3>{header}</h3>
        <h4>{subtitle}</h4>
        <p>{content}</p>
      </div>
    </div>
  );
};

export default ResumeItem;
