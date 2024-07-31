import React from "react";

import DefaultHead from "@components/Head";
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
        <h2>I'm Working on it...</h2>
      </div>
      <Footer />
    </>
  );
};

export default ProjectPage;

export const Head = () => <DefaultHead title={"Projects | Dan McCarthy"} />;
