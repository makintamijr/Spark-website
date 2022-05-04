import React from "react";
import links from "../../linksdata";
import { Link } from "react-router-dom";
import "./NavLinks.scss";

const NavLinks = () => {
  return (
    <>
      <div className="nav-links">
        <ul>
          {links.map((link, index) => (
            <li key={index}>
              <Link to={link.to}>{link.name}</Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default NavLinks;
