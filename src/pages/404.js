import React from "react";
import { Link } from "gatsby";
import { motion } from "framer-motion";

// Components
import Layout from "@components/Common/Layout";

const NotFoundPage = () => {
  return (
    <Layout>
      <main className="error-style">
        <h1>404</h1>
        <h2>Page Not Found</h2>
        <p>
          Sorry 😔, the page you're looking for may have been removed, or had
          its name changed.
        </p>
        <motion.button className="button">
          <Link to="/">Return Home</Link>
        </motion.button>
      </main>
    </Layout>
  );
};

export default NotFoundPage;

export const Head = () => <title>404 - Page Not found</title>;
