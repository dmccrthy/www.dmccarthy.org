import headshot from "@img/headshot.jpg";

/**
 * Build page data in to JSON-LD Structured Data
 * @param {String} title Page title
 * @param {String} url
 * @param {String} type
 * @param {String} date
 * @param {String} excerpt
 * @param {String} tags
 * @param {String} image
 * @return {Object} JSON-LD Structured Data
 */
export default function BuildStructuredData(
  title,
  url,
  type,
  date,
  excerpt,
  tags,
  image
) {
  // Define root URL
  const mainPage = "https://www.dmccarthy.org";

  // Return Structured Data to React Helmet
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        // Person data for use with @author
        "@type": "Person",
        "@id": `${mainPage}#person`,
        name: "Dan McCarthy",
        image: {
          "@type": "ImageObject",
          "@id": `${mainPage}#personImage`,
          url: `${mainPage}${headshot}`,
          caption: "Dan McCarthy",
        },
        description:
          "Dan McCarthy is a Software developer and student at the University of New Hampshire.",
        sameAs: [
          "http://www.linkedin.com/in/danmcc",
          "https://github.com/dmccrthy",
        ],
      },
      {
        // Root website structure
        "@type": "WebSite",
        "@id": `${mainPage}#website`,
        url: mainPage,
        name: "Dan McCarthy",
      },
      {
        // Individual webpage
        "@type": "WebPage",
        "@id": `${url}#webpage`,
        url: url,
        inLanguage: "en-US",
        name: title,
        isPartOf: { "@id": `${mainPage}#website` },
        image: {
          "@type": "ImageObject",
          "@id": `${url}#primaryImage`,
          url: `https://www.dmccarthy.org${image}`,
        },
        primaryImageOfPage: {
          "@id": `${url}#primaryImage`,
        },
        datePublished: date,
        description: `${excerpt}`,
        // breadcrumb: { "@id": "#breadcrumb" },
      },
      // Add article data if present
      type === "article"
        ? {
            "@type": "Article",
            "@id": `${url}#article`,
            isPartOf: { "@id": `${url}#webpage` },
            author: {
              "@id": `${mainPage}#person`,
            },
            headline: title,
            datePublished: date,
            mainEntityOfPage: `${url}#webpage`,
            image: { "@id": `${url}#primaryImage` },
            keywords: tags,
          }
        : {},
    ],
  };
}
