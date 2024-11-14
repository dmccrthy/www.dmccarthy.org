import React from "react";
import { Link } from "gatsby";
import { motion } from "framer-motion";

/**
 * Links for the website nav bar/menu
 * @param {String} target Link destination
 * @param {String} label Link label
 * @param {String} color Color class for :hover
 * @returns {Object} formatted link
 */
const NavLink = ({ target, label, color }) => {
  // Vertical shift of framer animations
  const yShift = 5;

  return (
    <motion.h3 whileHover={{ y: yShift }}>
      <Link to={target} className={color}>
        {label}
      </Link>
    </motion.h3>
  );
};

export default NavLink;
