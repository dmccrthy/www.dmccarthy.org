// Packages
import React from "react";
import { Helmet } from "react-helmet";

// Images
import favicon from "@img/favicon.png";

const DefaultHead = ({ title, slug }) => {
  // Create Canonical from slug
  const url = `https://www.dmccarthy.org${slug}`;

  return (
    <Helmet>
      {/* HTML Meta */}
      <title>{title}</title>
      <meta name="author" content="Dan McCarthy" />
      <meta
        name="description"
        content="Hi, my name is Dan and I'm a CS Major interested in all things
            software development. I am currently working towards a BS in Computer Science
            at the University of New Hampshire and in my free time I like to
            work on different projects often in Python or Javascript."
      />
      <meta
        name="keywords"
        content="Dan McCarthy, dmccarthy, McCarthy, Development, Porfolio, Daniel McCarthy, dmccarthy.org, Computer Science, CS, NH, New Hampshire, UNH"
      />
      <link rel="canonical" href={url} />
      <link id="icon" rel="icon" href={favicon} />

      {/* Open Graph Meta */}
    </Helmet>
  );
};

export default DefaultHead;
