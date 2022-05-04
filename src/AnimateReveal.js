const AnimateReveal = {
  offscreen: {
    y: 400,
    opacity: 0,
  },
  onscreen: {
    y: 0,
    opacity: 1,

    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 0.8,
    },
  },
};

export default AnimateReveal;
