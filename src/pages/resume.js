import React from "react";

// Components
import DefaultHead from "@components/Head";
import ResumeItem from "@components/ResumePage/ResumeItem";
import Layout from "@components/Layout";

// Styles
import "@styles/components/ResumePage.scss";

// Images
import unh from "@img/UNH.png";
import iol from "@img/IOL.png";

const ResumePage = () => {
  return (
    <Layout>
      <div className="page-container">
        <h2>My Resume:</h2>
        <div className="resume-section">
          <h3>Education:</h3>
          <ResumeItem
            image={unh}
            header="University of New Hampshire"
            subtitle="September 2024 - May 2028 | B.S. in Computer Science"
            content="Currently studying computer science at UNH. "
          />
        </div>
        <div className="resume-section">
          <h3>Experience:</h3>
          <ResumeItem
            image={iol}
            header="IPv6 Test Technician"
            subtitle="July 2023 - Present | UNH InterOperability Lab, Durham, NH"
            // content="Currently studying computer science at UNH. "
          />
        </div>
        {/* <div className="resume-section">
          <h1>Certificates:</h1>
          <ResumeItem
            header="IPv6 Test Technician"
            subtitle="July 2023 - Present | UNH InterOperability Lab, Durham, NH"
            content="Currently studying computer science at UNH. "
          />
        </div>
        <div className="resume-section">
          <h1>Skills:</h1>
        </div> */}
      </div>
    </Layout>
  );
};

export default ResumePage;

export const Head = () => (
  <DefaultHead title={"Resume | Dan McCarthy"} slug={"/resume/"} />
);
