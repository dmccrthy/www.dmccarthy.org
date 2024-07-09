import React from "react";

import DefaultHead from "@components/SEO";
import Navbar from "@components/Navbar";
import Footer from "@components/Footer";

const ProjectPage = () => {
  return (
    <>
      <Navbar />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "90vh",
        }}
      >
        <h1>I'm Working on it...</h1>
      </div>
      <Footer />
    </>
  );
};

export default ProjectPage;

export const Head = () => <DefaultHead title={"Projects | Dan McCarthy"} />;
