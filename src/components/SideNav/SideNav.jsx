import React from "react";
import { Link } from "react-router-dom";
import links from "../../linksdata";
import LoginBtn from "../LoginBtn/LoginBtn";
import { motion } from "framer-motion";
import "./SideNav.scss";
import CloseIcon from "@mui/icons-material/Close";
import Backdrop from "../common/Backdrop/Backdrop";
import RouteTransitionOut from "../../RouteTransitionOut";

const SideNav = ({ close }) => {
  return (
    <>
      <Backdrop onClick={close}>
        <div className="sidenav">
          <motion.ul
            onClick={(e) => e.stopPropagation()}
            variants={RouteTransitionOut}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <div className="close-icon-container">
              <CloseIcon onClick={close} className="close-icon" />
            </div>

            {links.map((link, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                <Link onClick={close} to={link.to}>
                  {link.name}
                </Link>
              </motion.li>
            ))}
            <LoginBtn className="sidebar-btn" />
          </motion.ul>
        </div>
      </Backdrop>
    </>
  );
};

export default SideNav;
