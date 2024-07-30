// Packages
import React from "react";

// Components
import DefaultHead from "@components/Head";
import Layout from "@components/Layout";

const BlogPage = ({ data, pageContext }) => {
  return (
    <Layout>
      <DefaultHead
        title={pageContext.title + " | Dan McCarthy"}
        slug={`/${pageContext.slug}/`}
      />
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
    </Layout>
  );
};

export default BlogPage;
