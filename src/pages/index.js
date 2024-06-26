// Packages
import React from "react";

// Components
import DefaultHead from "@components/SEO";
import Navbar from "@components/Navbar";
import Footer from "@components/Footer";
import PageHeader from "@components/IndexPage/PageHeader";
import AboutMe from "@components/IndexPage/AboutMe";
import MoreSection from "@components/IndexPage/MoreSection";

// Styles
import "@styles/global.scss";

// Main Webpage
const IndexPage = () => {
  return (
    <>
      <Navbar />
      <PageHeader />
      <AboutMe />
      <MoreSection />
      <Footer />
    </>
  );
};

export default IndexPage;

// Header Contents
export const Head = () => (
  <DefaultHead title={"Dan McCarthy - Student & Developer"} slug={""} />
);
