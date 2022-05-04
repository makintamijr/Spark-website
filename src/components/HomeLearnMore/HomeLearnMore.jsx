import React, { useRef } from "react";
import img1 from "../../img/hlm-img1.png";
import img2 from "../../img/hlm-img2.png";
import "./HomeLearMore.scss";
import HomeLearnLeft from "./../HomeLearnLeft/HomeLearnLeft";
import HomeLearnRight from "./../HomeLearnRight/HomeLearnRight";
import AnimateReveal from "../../AnimateReveal";
import { motion } from "framer-motion";

const HomeLearnMore = () => {
  const scrollRef = useRef(null);
  return (
    <>
      <motion.div
        className="homelearn-wrapper"
        variants={AnimateReveal}
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ root: scrollRef }}
      >
        <div className="homelearn-container">
          <HomeLearnLeft img1={img1} img2={img2} />

          <HomeLearnRight />
        </div>
      </motion.div>
    </>
  );
};

export default HomeLearnMore;
