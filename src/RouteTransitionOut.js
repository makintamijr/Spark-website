const RouteTransitionOut = {
  hidden: {
    x: "100vh",
    opacity: 0,
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      type: "spring",
      duration: 0.1,
      damping: 50,
      stiffness: 700,
    },
  },
  exit: {
    x: "100vh",
    opacity: 0,
  },
};

export default RouteTransitionOut;
