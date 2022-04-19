import React from "react";
import Typography from "../common/Typography/Typography";
import OfferLeftBody from "./../OfferLeftBody/OfferLeftBody";
import LearnMoreBtn from "./../LearnMoreBtn/LearnMoreBtn";
import useModal from "../../hooks/useModal";
import Modal from "../common/Modal/Modal";
import { AnimatePresence } from "framer-motion";
import "./OffersLeft.scss";

const OffersLeft = () => {
  const { isModalOpen, close, open } = useModal();
  return (
    <>
      <div className="o-left">
        <Typography variant={"h1"}>What Do We Offer You</Typography>

        <OfferLeftBody />

        <div className="o-btn">
          <LearnMoreBtn onClick={open} />
        </div>

        <AnimatePresence initial={false} exitBeforeEnter={true}>
          {isModalOpen && (
            <Modal isModalOpen={isModalOpen} handleClose={close}>
              <Typography variant={"body1"}>What Do We Offer You</Typography>
            </Modal>
          )}
        </AnimatePresence>
      </div>
    </>
  );
};

export default OffersLeft;
