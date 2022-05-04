import React, { useRef } from "react";
import "./Offers.scss";
import OffersRight from "./../OffersRight/OffersRight";
import OffersLeft from "./../OffersLeft/OffersLeft";
import AnimateReveal from "../../AnimateReveal";
import { motion } from "framer-motion";

const Offers = () => {
  const scrollRef = useRef(null);
  return (
    <>
      <motion.div
        className="offers-wrapper"
        variants={AnimateReveal}
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ root: scrollRef }}
      >
        <div className="offers-container">
          <OffersLeft />

          <OffersRight />
        </div>
      </motion.div>
    </>
  );
};

export default Offers;
