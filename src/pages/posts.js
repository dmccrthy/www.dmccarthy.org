// Packages
import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";

// Components
import DefaultHead from "@components/SEO";
import Navbar from "@components/Navbar";
import Footer from "@components/Footer";
import FetchMarkdown from "@src/hooks/graphql";

const PageContainer = styled.div`
  display: flex;
  width: 100vw;
  background-color: #1d2021;
`;

const PostList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 45vw;
  height: auto;
  min-height: 90vh;
  margin-left: 5vw;
  margin-right: 5vw;

  h2 {
    margin-left: 1vw;
    margin-top: 10vh;
  }

  hr {
    width: 15vw;
    margin-bottom: 1vw;
  }
`;

const PostCard = styled.div`
  display: flex;
  flex-direction: column;
  height: 20vh;
  border-radius: 1vw;
  padding: 2vw;
  margin-bottom: 1vh;
  background-color: #111111;

  a {
    text-decoration: none;

    h2 {
      text-decoration: underline;
    }
  }
`;

const BlogPage = () => {
  const posts = FetchMarkdown().allMarkdownRemark.edges;

  return (
    <>
      <Navbar />
      <div>
        <PageContainer>
          <PostList>
            <h2 style={{ marginBottom: "10px" }}>Posts:</h2>
            {posts.map(({ node }) => (
              <PostCard>
                <Link to={"/posts/" + node.frontmatter.slug}>
                  <h3> {node.frontmatter.title}</h3>
                  <h4> {node.frontmatter.date} </h4>
                  <p> {node.frontmatter.excerpt} </p>
                </Link>
              </PostCard>
            ))}
          </PostList>
        </PageContainer>
      </div>
      <Footer />
    </>
  );
};

export default BlogPage;

export const Head = () => (
  <DefaultHead title={"Blog Posts | Dan McCarthy"} slug={"/posts/"} />
);
