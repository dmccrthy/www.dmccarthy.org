// Packages
import React from "react";

// Components
import Navbar from "@components/Navbar";
import Footer from "@components/Footer";
import DefaultHead from "@components/SEO";

const BlogPage = ({ data, pageContext }) => {
  return (
    <>
      <DefaultHead
        title={pageContext.title + " | Dan McCarthy"}
        slug={`/${pageContext.slug}/`}
      />
      <Navbar />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          height: "90vh",
        }}
      >
        <h1>{pageContext.title}</h1>
        <p>{pageContext.content}</p>
      </div>
      <Footer />
    </>
  );
};

export default BlogPage;
