export const viewportOnce = { once: true, amount: 0.2 };
export const easeOut = { duration: 0.6, ease: "easeOut" };
export const hoverGrow = { scale: 1.04 };
export const tapShrink = { scale: 0.97 };

export const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

export const staggerList = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08 },
  },
};
