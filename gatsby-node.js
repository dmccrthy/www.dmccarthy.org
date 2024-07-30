const path = require("path");

// Define webpack import alias
exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        "@src": path.resolve(__dirname, "src"),
        "@components": path.resolve(__dirname, "src/components"),
        "@img": path.resolve(__dirname, "src/img"),
        "@hooks": path.resolve(__dirname, "src/hooks"),
        "@styles": path.resolve(__dirname, "src/styles"),
        "@templates": path.resolve(__dirname, "src/templates"),
      },
    },
  });
};

// Create pages dynamically on build
exports.createPages = async function ({ actions, graphql }) {
  const { createPage } = actions;

  const res = await graphql(`
    query {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              title
              slug
            }
            rawMarkdownBody
          }
        }
      }
    }
  `);

  try {
    const edges = res.data.allMarkdownRemark.edges;

    edges.forEach(({ node }) => {
      createPage({
        path: "posts/" + node.frontmatter.slug,
        component: path.resolve("src/templates/post.js"),
        context: {
          title: node.frontmatter.title,
          slug: node.frontmatter.slug,
          content: node.rawMarkdownBody,
        },
      });
    });
  } catch (error) {
    return Promise.reject(new Error(error));
  }
};
