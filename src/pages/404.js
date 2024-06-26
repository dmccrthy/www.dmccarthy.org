// Packages
import React from "react";
import { Link } from "gatsby";

// Styles
import "@styles/pages/404.scss";

const NotFoundPage = () => {
  return (
    <main className="error-style">
      <h1>404</h1>
      <h2>Page Not Found</h2>
      <p>
        Sorry 😔, the page you're looking for may have been removed, or had its
        name changed.
      </p>
      <button>
        <Link to="/">Return Home</Link>
      </button>
    </main>
  );
};

export default NotFoundPage;

export const Head = () => <title>404 - Page Not found</title>;
