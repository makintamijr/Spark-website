import React from "react";
import "./Loader.scss";
import Image from "../common/Image/Image";
import spark from "../../img/spark.svg";
import { motion } from "framer-motion";

const bounceTransition = {
  y: {
    duration: 0.5,
    yoyo: Infinity,
    ease: "easeOut",
  },
};

// const pathVariants = {
//   hidden: { opacity: 0, pathLength: 0 },
//   visible: { opacity: 1, pathLength: 1 },
//   transition: { duration: 2, ease: "easeInOut" },
// };

const Loader = () => {
  return (
    <>
      <div className="loader-container">
        <div className="loader">
          <motion.div
            animate={{ y: ["20%", "-20%"] }}
            transition={bounceTransition}
            className="img"
          >
            <Image src={spark} />
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default Loader;
