import { useStaticQuery, graphql } from "gatsby";

// Graphql Queries
export default function FetchMarkdown() {
  const data = useStaticQuery(graphql`
    query posts {
      allMarkdownRemark {
        edges {
          node {
            excerpt
            timeToRead
            frontmatter {
              title
              slug
              date
              tags
            }
          }
        }
      }
    }
  `);

  return data;
}
