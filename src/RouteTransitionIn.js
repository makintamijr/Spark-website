const RouteTransitionIn = {
  hidden: {
    x: "-100vh",
    opacity: 0,
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      type: "spring",
      duration: 0.5,
      damping: 20,
      stiffness: 300,
    },
  },
  exit: {
    x: "100vh",
    opacity: 0,
  },
};

export default RouteTransitionIn;
