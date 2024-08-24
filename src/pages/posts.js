// Packages
import React from "react";
import { Link } from "gatsby";

// Components
import DefaultHead from "@components/Common/Head";
import Layout from "@components/Common/Layout";
import FetchMarkdown from "@hooks/graphql";

const BlogPage = () => {
  const posts = FetchMarkdown().allMarkdownRemark.edges;

  return (
    <Layout>
      <div>
        <div>
          <div>
            <h2 style={{ marginBottom: "10px" }}>Posts:</h2>
            {posts.map(({ node }) => (
              <div>
                <Link to={"/posts/" + node.frontmatter.slug}>
                  <h3> {node.frontmatter.title}</h3>
                  <h4> {node.frontmatter.date} </h4>
                  <p> {node.excerpt} </p>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default BlogPage;

export const Head = () => (
  <DefaultHead title={"Blog Posts | Dan McCarthy"} slug={"posts/"} />
);
