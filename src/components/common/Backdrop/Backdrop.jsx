import React from "react";
import { motion } from "framer-motion";
import "./Backdrop.scss";

const Backdrop = ({ children, onClick }) => {
  return (
    <>
      <motion.div
        className="backdrop"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        {children}
      </motion.div>
    </>
  );
};

export default Backdrop;
