// Packages
import React from "react";

// Components
import DefaultHead from "@components/Common/SEO";
import PageHeader from "@components/IndexPage/PageHeader";
import AboutMe from "@components/IndexPage/AboutMe";
import ContactSection from "@components/IndexPage/ContactSection";
import Layout from "@components/Common/Layout";

import main from "@img/home-main.png";

// Main Webpage
const IndexPage = () => {
  return (
    <Layout>
      <DefaultHead
        title={"Hi, I'm Dan McCarthy"}
        slug={""}
        type={"website"}
        date={"2024-10-13"}
        excerpt={`Hi, my name is Dan and I'm a CS Major interested 
          in software development, and cyber security. I am currently 
          working towards a BS in Computer Science at the University 
          of New Hampshire and in my free time I like to work on 
          different projects often in Python or Javascript.`}
        tags={"Porfolio, New Hampshire, UNH, Computer Science"}
        image={main}
      />
      <PageHeader />
      <AboutMe />
      <ContactSection />
    </Layout>
  );
};

export default IndexPage;
