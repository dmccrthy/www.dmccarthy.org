import React from "react";

// Components
import DefaultHead from "@components/SEO";
import Navbar from "@components/Navbar";
import Footer from "@components/Footer";
import ResumeItem from "@components/ResumePage/ResumeItem";

// Styles
import "@styles/components/ResumePage.scss";

// Images
import unh from "@img/UNH.png";
import iol from "@img/IOL.png";

const ResumePage = () => {
  return (
    <>
      <Navbar />
      <div className="page-container">
        {/* <h1>My Resume</h1> */}
        <div className="resume-section">
          <h1>Education:</h1>
          <ResumeItem
            image={unh}
            header="University of New Hampshire"
            subtitle="September 2024 - May 2028 | B.S. in Computer Science"
            content="Currently studying computer science at UNH. "
          />
        </div>
        <div className="resume-section">
          <h1>Experience:</h1>
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
      <Footer />
    </>
  );
};

export default ResumePage;

export const Head = () => (
  <DefaultHead title={"Resume | Dan McCarthy"} slug={"/resume/"} />
);
