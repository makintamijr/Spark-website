import React from "react";
import LoginBtn from "./../LoginBtn/LoginBtn";
import NavLinks from "./../NavLinks/NavLinks";
import Logo from "../Logo/Logo";
import "./NavigationMenu.scss";
import logo from "../../img/sparklogo.png";
import MenuIcon from "@mui/icons-material/DragHandle";
import LightModeIcon from "@mui/icons-material/LightMode";
// import SideBarMenu from "./../SideBarMenu/SideBarMenu";
import SideNav from "../SideNav/SideNav";
import useSideNav from "../../hooks/useSideNav";
import { AnimatePresence } from "framer-motion";

const NavigationMenu = ({ changeMode }) => {
  // const [active, setActive] = useState("false");
  const { isSideNavOpen, close, open } = useSideNav();

  return (
    <>
      <div className="nav-wrapper">
        <div className="nav-container">
          <Logo logo={logo} />

          <div className="nav-center">
            <NavLinks className="nav-links" />
          </div>

          <div className="nav-right">
            <LightModeIcon className="lightmode-toggle" onClick={changeMode} />

            <LoginBtn className="login" />

            <MenuIcon className="buger-menu" onClick={open} />
            {/* <MenuIcon onClick={() => setActive(false)} className="buger-menu" /> */}
          </div>
        </div>
      </div>
      <AnimatePresence initial={false} exitBeforeEnter={true}>
        {isSideNavOpen && (
          <SideNav isSideNavOpen={isSideNavOpen} close={close} />
        )}
      </AnimatePresence>

      {/* <SideBarMenu active={active} setActive={setActive} /> */}
    </>
  );
};

export default NavigationMenu;
