import React from "react";
import HomeScreen from "./screens/HomeScreen/HomeScreen";
import ContactScreen from "./screens/ContactScreen/Contact";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

const AnimatedRoutes = () => {
  const location = useLocation();
  return (
    <AnimatePresence initial={true} exitBeforeEnter={true}>
      <Routes location={location} key={location.pathname}>
        <Route exact path="/" element={<HomeScreen />} />
        <Route path="/contact" element={<ContactScreen />} />
      </Routes>
    </AnimatePresence>
  );
};

export default AnimatedRoutes;
