import React from "react";
import "./Contact.scss";
import { motion } from "framer-motion";
import RouteTransitionIn from "../../RouteTransitionIn";
import TypographyBD from "./TypographyBD";
import ButtonBD from "./ButtonBD";
import ImageBD from "./ImageBD";
import LinksBD from "./LinksBD";
import InputBD from "./InputBD";
import BackdropBD from "./BackdropBD";

const Contact = () => {
  //

  //
  return (
    <>
      <motion.div
        className="contact-wrapper"
        variants={RouteTransitionIn}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        <div className="contact-container">
          <TypographyBD />

          <ButtonBD />

          <ImageBD />

          <LinksBD />

          <InputBD />

          <BackdropBD />
        </div>
      </motion.div>
    </>
  );
};

export default Contact;
