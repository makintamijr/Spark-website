import React, { useRef } from "react";
import "./Partners.scss";
import PatnersHead from "./../PartnersHead/PatnersHead";
import PartnersBrands from "./../PartnersBrands/PartnersBrands";
import AnimateReveal from "../../AnimateReveal";
import { motion } from "framer-motion";

const Partners = () => {
  const scrollRef = useRef(null);
  return (
    <>
      <motion.div
        className="partners-wrapper"
        variants={AnimateReveal}
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ root: scrollRef }}
      >
        <div className="partners-container">
          <PatnersHead />

          <PartnersBrands />
        </div>
      </motion.div>
    </>
  );
};

export default Partners;
