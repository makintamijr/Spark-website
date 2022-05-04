import React, { useRef } from "react";
import "./HomeStats.scss";
import HomeStatsRight from "./../HomeStatsRight/HomeStatsRight";
import HomeStatsCenter from "./../HomeStatsCenter/HomeStatsCenter";
import HomeStatsLeft from "./../HomeStatsLeft/HomeStatsLeft";
import { motion } from "framer-motion";
import AnimateReveal from "../../AnimateReveal";

const HomeStats = () => {
  const scrollRef = useRef(null);
  return (
    <>
      <motion.div
        className="homestats-wrapper"
        variants={AnimateReveal}
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ root: scrollRef }}
      >
        <div className="homestats-container">
          <HomeStatsLeft />

          <HomeStatsCenter />

          <HomeStatsRight />
        </div>
      </motion.div>
    </>
  );
};

export default HomeStats;
