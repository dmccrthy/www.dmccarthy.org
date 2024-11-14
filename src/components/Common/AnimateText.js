import React from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

/**
 * Creates animated text effect when entering view
 * Used for a lot of headers
 * @param {String} text
 * @param {Array} classes
 * @returns {Object} Animated text fade in
 */
export const AnimateText = ({ text, classes }) => {
  const ctrls = useAnimation();

  const { ref, inView } = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });

  useEffect(() => {
    if (inView) {
      ctrls.start("visible");
    }
    if (!inView) {
      ctrls.start("hidden");
    }
  }, [ctrls, inView]);

  const textAnimation = {
    hidden: {
      opacity: 0,
      y: `0.25em`,
    },
    visible: {
      opacity: 1,
      y: `0em`,
      transition: {
        duration: 1,
        ease: [0.2, 0.65, 0.3, 0.9],
      },
    },
  };

  const dropinVariants = {
    hidden: {
      opacity: 0,
      y: `-0.25em`,
    },
    visible: {
      opacity: 1,
      y: `0em`,
      transition: {
        duration: 1,
        ease: [0.2, 0.65, 0.3, 0.9],
      },
    },
  };

  return (
    <motion.span
      className={classes.join(" ")}
      ref={ref}
      initial="hidden"
      animate={ctrls}
      variants={textAnimation}
    >
      {text}
    </motion.span>
  );
};
