import React from "react";
import "./Button.scss";
import classNames from "classnames";
import { motion } from "framer-motion";

// const variantMapping = {
//   contained: "contained",
//   outlined: "outlined",
// };

const Button = ({ variant, onClick, children, ...props }) => {
  //

  return (
    <>
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{
          scale: 0.8,
        }}
        type="button"
        className={classNames({ [`variant-${variant}`]: variant })}
        {...props}
        onClick={onClick}
      >
        {children}
      </motion.button>
    </>
  );
};

export default Button;
