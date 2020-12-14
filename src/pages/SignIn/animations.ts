import { Variant } from 'framer-motion';

type ObjectVariants = {
  [key: string]: Variant;
};

export const formAnimations: ObjectVariants = {
  unMounted: { opacity: 0, y: -50 },
  mounted: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      mass: 2.5,
    },
  },
  exit: {
    opacity: 0,
    y: 50,
    transition: {
      type: 'spring',
      mass: 2.5,
    },
  },
  error: {
    x: [0, 20, 0, -20, 0],
    transition: {
      duration: 0.2,
    },
  },
};

export const errorFormAnimations = {};
