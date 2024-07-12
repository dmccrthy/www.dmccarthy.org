// Packages
import React from "react";

// Components
import DefaultHead from "@components/SEO";
import Navbar from "@components/Navbar";
import Footer from "@components/Footer";
import PageHeader from "@components/IndexPage/PageHeader";
import AboutMe from "@components/IndexPage/AboutMe";
import ContactSection from "../components/IndexPage/ContactSection";

// Styles
import "@styles/global.scss";

// Main Webpage
const IndexPage = () => {
  return (
    <div className="fade-in-page">
      <Navbar />
      <PageHeader />
      <AboutMe />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default IndexPage;

// Header Contents
export const Head = () => (
  <DefaultHead title={"Dan McCarthy - Student & Developer"} slug={""} />
);
