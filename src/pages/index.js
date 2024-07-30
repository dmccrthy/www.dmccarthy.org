// Packages
import React from "react";

// Components
import DefaultHead from "@components/Head";
import PageHeader from "@components/IndexPage/PageHeader";
import AboutMe from "@components/IndexPage/AboutMe";
import ContactSection from "@components/IndexPage/ContactSection";
import Layout from "@components/Layout";

// Main Webpage
const IndexPage = () => {
  return (
    <Layout className="fade-in-page">
      <PageHeader />
      <AboutMe />
      <ContactSection />
    </Layout>
  );
};

export default IndexPage;

// Header Contents
export const Head = () => (
  <DefaultHead title={"Dan McCarthy - Student & Developer"} slug={""} />
);
