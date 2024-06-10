import React from "react";
import { Helmet } from "react-helmet";
import favicon from "@img/favicon.png";

const DefaultHead = ({ title }) => {
  return (
    <Helmet>
      {/* Meta */}
      <title>{title}</title>

      <meta name="description" content="Dan McCarthy - Student and Developer" />
      <meta
        name="keywords"
        content="Dan McCarthy, dmccarthy, McCarthy, Development, Porfolio, Daniel McCarthy, dmccarthy.org, Computer Science, CS, NH, New Hampshire, UNH"
      />
      <meta name="url" content="https://www.dmccarthy.org" />
      <link rel="canonical" href="https://www.dmccarthy.org" />
      <link id="icon" rel="icon" href={favicon} />
    </Helmet>
  );
};

export default DefaultHead;
