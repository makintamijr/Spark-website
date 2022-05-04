import { useState } from "react";

const useSideNav = () => {
  const [isSideNavOpen, setSideNavOpen] = useState(false);
  const close = () => setSideNavOpen(false);
  const open = () => setSideNavOpen(true);

  return { isSideNavOpen, close, open };
};

export default useSideNav;
