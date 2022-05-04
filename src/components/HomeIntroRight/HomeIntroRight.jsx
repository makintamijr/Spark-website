import React from "react";
import Image from "../../components/common/Image/Image";
import "./HomeIntroRight.scss";
import { motion } from "framer-motion";

const HomeIntroRight = ({ img1, img2 }) => {
  return (
    <>
      <motion.div
        className="home-right"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1, type: "tween" }}
      >
        <Image src={img1} className="img1" />
        <Image src={img2} className="img2" />
      </motion.div>
    </>
  );
};

export default HomeIntroRight;
