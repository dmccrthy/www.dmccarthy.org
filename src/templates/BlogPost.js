// Packages
import React from "react";
import { graphql } from "gatsby";

// Components
import DefaultHead from "@components/Common/SEO";
import Layout from "@components/Common/Layout";

// Styles
import "@styles/templates/BlogPost.scss";

const BlogPost = ({ data, pageContext }) => {
  // Get value from data
  const { title, date, tags } = data.markdownRemark.frontmatter;
  const { timeToRead, html, excerpt, id } = data.markdownRemark;

  return (
    <Layout>
      <DefaultHead
        title={title}
        slug={`posts/${pageContext.slug}/`}
        type={"article"}
        date={date}
        excerpt={excerpt}
        tags={tags}
        image={""}
      />
      <div className="article-wrapper">
        <h2>{title}</h2>
        <h3>{`By: Dan McCarthy | ${date}`}</h3>
        <article
          dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }}
        ></article>
      </div>
    </Layout>
  );
};

export const query = graphql`
  query BlogPostBySlug($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      excerpt
      html
      timeToRead
      id
      frontmatter {
        title
        date
        tags
      }
    }
  }
`;

export default BlogPost;
