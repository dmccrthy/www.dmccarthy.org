// Packages
import React, { useEffect } from "react";

// Components
import useTheme from "@hooks/useTheme";
import Navbar from "@components/Navbar";
import Footer from "@components/Footer";

// Styles
import "@styles/global.scss";

/**
 *  A wrapper for site pages including Navbar and Footer
 * @param {Object} children Contains HTML Object of everything inside of it.
 * @returns {Object} The layout wrapper used in each webpage
 */
const Layout = ({ children }) => {
  // Light/Dark Theme updating
  const [theme, toggleTheme] = useTheme();

  // Updates HTML class according to theme
  useEffect(() => {
    const root = document.documentElement;

    if (theme === "dark") {
      root?.classList.remove("theme--light");
      root?.classList.add("theme--dark");
    }
    if (theme === "light") {
      root?.classList.remove("theme--dark");
      root?.classList.add("theme--light");
    }
  }, [theme]);

  return (
    <div>
      <Navbar theme={theme} toggle={toggleTheme} />
      <>{children}</>
      <Footer />
    </div>
  );
};

export default Layout;
