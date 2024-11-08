import React from "react";

// Components
import DefaultHead from "@components/Common/SEO";
import Layout from "@components/Common/Layout";
import ResumeItem from "@components/ResumePage/ResumeItem";

// Images
import unh from "@img/resume/UNH.png";
import iol from "@img/resume/IOL.png";

const ResumePage = () => {
  return (
    <Layout>
      <main className="container main-bg" style={{ paddingTop: "10vh" }}>
        <h2>My Resume:</h2>
        <section className="resume-section">
          <h3>Education:</h3>
          <ResumeItem
            image={unh}
            header="University of New Hampshire"
            subtitle="September 2024 - May 2028 | B.S. in Computer Science"
            // content="Currently studying computer science at UNH. "
          />
        </section>
        <section className="resume-section">
          <h3>Experience:</h3>
          <ResumeItem
            image={iol}
            header="IPv6 Test Technician"
            subtitle="July 2023 - Present | UNH InterOperability Lab, Durham, NH"
            // content="Currently studying computer science at UNH. "
          />
        </section>
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
      </main>
    </Layout>
  );
};

export default ResumePage;

export const Head = () => (
  <DefaultHead title={"Resume | Dan McCarthy"} slug={"resume/"} />
);
