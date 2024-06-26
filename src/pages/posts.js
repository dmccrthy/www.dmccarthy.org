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
  background-color: #191919;
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

  h1 {
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
`;

const BlogPage = () => {
  const posts = FetchMarkdown().allMarkdownRemark.edges;

  return (
    <>
      <Navbar />
      <div>
        <PageContainer>
          <PostList>
            <h1>Posts:</h1>
            <hr />
            {posts.map(({ node }) => (
              <PostCard>
                <Link to={"/posts/" + node.frontmatter.slug}>
                  <h2> {node.frontmatter.title}</h2>
                  <h3> {node.frontmatter.date} </h3>
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
