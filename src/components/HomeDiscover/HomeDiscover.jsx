import React, { useRef } from "react";
import "./HomeDiscover.scss";
import HomeDiscoverRight from "./../HomeDiscoverRight/HomeDiscoverRight";
import HomeDiscoverLeft from "./../HomeDiscoverLeft/HomeDiscoverLeft";
import AnimateReveal from "../../AnimateReveal";
import { motion } from "framer-motion";

const HomeDiscover = () => {
  const scrollRef = useRef(null);
  return (
    <>
      <motion.div
        className="homediscover-wrapper"
        variants={AnimateReveal}
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ root: scrollRef }}
      >
        <div className="homediscover-container">
          <HomeDiscoverLeft />

          <HomeDiscoverRight />
        </div>
      </motion.div>
    </>
  );
};

export default HomeDiscover;
