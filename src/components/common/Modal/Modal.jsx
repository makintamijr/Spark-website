import React from "react";
import { motion } from "framer-motion";
import Backdrop from "../Backdrop/Backdrop";
import "./Modal.scss";
import Button from "../Button/Button";

const fallDown = {
  hidden: {
    y: "-100vh",
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      duration: 0.1,
      damping: 20,
      stiffness: 300,
    },
  },
  exit: {
    y: "100vh",
    opacity: 0,
  },
};

const Modal = ({ children, handleClose }) => {
  return (
    <Backdrop onClick={handleClose}>
      <motion.div
        className="modal"
        onClick={(e) => e.stopPropagation()}
        variants={fallDown}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        <div className="modal-children">{children}</div>
        <Button
          variant={"contained"}
          className="modal-button gradient"
          type="button"
          onClick={handleClose}
        >
          close
        </Button>
      </motion.div>
    </Backdrop>
  );
};

export default Modal;
