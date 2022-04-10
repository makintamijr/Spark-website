import React from "react";
import CloseIcon from "@mui/icons-material/Close";

const SideBarCloseIcon = ({ setActive }) => {
  return (
    <div className="close-icon-container">
      <CloseIcon onClick={() => setActive(true)} className="close-icon" />
    </div>
  );
};

export default SideBarCloseIcon;
