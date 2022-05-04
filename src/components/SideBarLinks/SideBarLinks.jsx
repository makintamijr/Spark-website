import React from "react";
import SideBarCloseIcon from "./../SideBarCloseIcon/SideBarCloseIcon";
import { Link } from "react-router-dom";
import links from "../../linksdata";
import LoginBtn from "../LoginBtn/LoginBtn";
import { motion } from "framer-motion";

const SideBarLinks = ({ active, setActive }) => {
  return (
    <ul className={active ? "sidebar-list" : "active"}>
      <SideBarCloseIcon setActive={setActive} />

      {links.map((link, index) => (
        <motion.li
          key={index}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <Link onClick={() => setActive(true)} to={link.to}>
            {link.name}
          </Link>
        </motion.li>
      ))}
      <LoginBtn className="sidebar-btn" />
    </ul>
  );
};

export default SideBarLinks;
