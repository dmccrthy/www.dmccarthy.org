import * as React from "react";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import DefaultHead from "../components/SEO";

const BlogPage = ({ data, pageContext }) => {
  return (
    <main>
      <DefaultHead title={pageContext.title + " | Dan McCarthy"} />
      <Navbar />
      <h1>{pageContext.title}</h1>
      <p>{pageContext.content}</p>
      <Footer />
    </main>
  );
};

export default BlogPage;
