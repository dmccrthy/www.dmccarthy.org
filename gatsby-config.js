/**
 * @type {import('gatsby').GatsbyConfig}
 */

module.exports = {
  siteMetadata: {
    title: `dmccarthy`,
    siteUrl: `https://www.dmccarthy.org`,
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `content`,
        path: `${__dirname}/src/content`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {},
    },
    {
      resolve: "gatsby-plugin-robots-txt",
      options: {
        env: {
          development: {
            policy: [{ userAgent: "*", disallow: ["/"] }],
          },
          production: {
            policy: [{ userAgent: "*", allow: "/" }],
          },
        },
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Dan McCarthy - About Me`,
        short_name: `Dan McCarthy`,
        start_url: `/`,
        background_color: `#f7f0eb`,
        theme_color: `#a2466c`,
        display: `standalone`,
        icon: "src/img/favicon.png",
      },
    },
    {
      resolve: "gatsby-plugin-sitemap",
    },
    `gatsby-plugin-fix-fouc`,
    `gatsby-plugin-sass`,
  ],
};
