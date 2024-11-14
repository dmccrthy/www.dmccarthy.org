import React from "react";
import { Helmet } from "react-helmet";
import BuildStructuredData from "@utils/BuildStructuredData";

const DefaultHead = ({ title, slug, type, date, excerpt, tags, image }) => {
  // Create URL from slug
  const url = `https://www.dmccarthy.org${slug}`;

  // Webpage Structured Data
  const schema = BuildStructuredData(
    title,
    url,
    type,
    date,
    excerpt,
    tags,
    image
  );

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

      {/* Open Graph Meta */}
      <meta property="og:title" content={title} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content="" />
      <meta property="og:type" content={type} />
      <meta property="og:description" content={excerpt} />

      {/* Twitter Tags */}

      {/* JSON-LD Structured Data */}
      <script type="application/ld+json">{JSON.stringify(schema)}</script>
    </Helmet>
  );
};

export default DefaultHead;
