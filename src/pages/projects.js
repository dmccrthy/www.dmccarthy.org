// Packages
import React from "react";

// Components
import DefaultHead from "@components/Common/SEO";
import Layout from "@components/Common/Layout";

const ProjectPage = () => {
  return (
    <Layout>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "90vh",
        }}
        className="main-bg"
      >
        <h2>Under Construction...</h2>
      </div>
    </Layout>
  );
};

export default ProjectPage;

export const Head = () => (
  <DefaultHead title={"Projects | Dan McCarthy"} slug="projects/" />
);
