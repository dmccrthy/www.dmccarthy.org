// Packages
import React from "react";
import { Helmet } from "react-helmet";

// Images
import favicon from "@img/favicon.png";
import headshot from "@img/headshot.jpg";

const DefaultHead = ({ title, slug, type, date, excerpt, tags, image }) => {
  const mainPage = "https://www.dmccarthy.org";
  const root = "https://www.dmccarthy.org/";

  // Create URL from slug
  const url = slug === "" ? mainPage : `${root}${slug}`;

  // Create Structured Data
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        // Main person struct
        "@type": "Person",
        "@id": `${root}#person`,
        name: "Dan McCarthy",
        image: {
          "@type": "ImageObject",
          "@id": `${root}#personImage`,
          url: `https://www.dmccarthy.org${headshot}`,
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
        "@id": `${root}#website`,
        url: mainPage,
        name: "Dan McCarthy",
      },
      {
        // Individual webpage
        "@type": "WebPage",
        "@id": `${url}#webpage`,
        url: slug === "" ? mainPage : url,
        inLanguage: "en-US",
        name: title,
        isPartOf: { "@id": `${root}#website` },
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
              "@id": `${root}#person`,
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

  return (
    <Helmet>
      {/* HTML Meta */}
      <title>{title}</title>
      <meta name="author" content="Dan McCarthy" />
      <meta name="description" content={excerpt} />
      <meta
        name="keywords"
        content={
          "Dan McCarthy, dmccarthy, McCarthy, Daniel McCarthy, dmccarthy.org" +
          tags
        }
      />
      <link rel="canonical" href={url} />
      <link id="icon" rel="icon" href={favicon} />

      {/* Open Graph Meta */}
      <meta property="og:title" content={title} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content="" />
      <meta property="og:type" content={type} />
      <meta property="og:description" content={excerpt} />

      {/* Google Structured Data */}
      <script type="application/ld+json">{JSON.stringify(schema)}</script>
    </Helmet>
  );
};

export default DefaultHead;
