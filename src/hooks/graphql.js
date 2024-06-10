import { useStaticQuery, graphql } from "gatsby";

// Graphql Queries
export default function FetchMarkdown() {
  const data = useStaticQuery(graphql`
    query posts {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              title
              slug
              date
              excerpt
            }
          }
        }
      }
    }
  `);

  return data;
}
