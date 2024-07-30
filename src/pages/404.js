// Packages
import React from "react";
import { Link } from "gatsby";

// Components
import Layout from "@components/Layout";

// Styles
import "@styles/pages/404.scss";

const NotFoundPage = () => {
  return (
    <Layout>
      <div className="error-style">
        <h1>404</h1>
        <h2>Page Not Found</h2>
        <p>
          Sorry 😔, the page you're looking for may have been removed, or had
          its name changed.
        </p>
        <button>
          <Link to="/">Return Home</Link>
        </button>
      </div>
    </Layout>
  );
};

export default NotFoundPage;

export const Head = () => <title>404 - Page Not found</title>;
