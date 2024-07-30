// Packages
import { useCallback, useState, useEffect } from "react";

/**
 * Initilizes theme and provides logic for changing themes
 * @returns {Array} returns array with current theme and toggle theme function
 */
const useTheme = () => {
  const item = "dmccarthy-theme";
  let [theme, setTheme] = useState("light");

  const toggleTheme = useCallback(() => {
    if (theme === "light") {
      setTheme("dark");
      localStorage.setItem(item, "dark");
    }
    if (theme === "dark") {
      setTheme("light");
      localStorage.setItem(item, "light");
    }
  }, [theme]);

  useEffect(() => {
    const savedTheme = localStorage.getItem(item);
    if (savedTheme) {
      setTheme(savedTheme);
    }
  }, []);

  return [theme, toggleTheme];
};

export default useTheme;
