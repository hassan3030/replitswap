import { Variants } from "framer-motion";

export const fadeIn = (direction: "up" | "down" | "left" | "right" = "up", delay: number = 0): Variants => ({
  hidden: {
    opacity: 0,
    y: direction === "up" ? 30 : direction === "down" ? -30 : 0,
    x: direction === "left" ? 30 : direction === "right" ? -30 : 0,
  },
  visible: {
    opacity: 1,
    y: 0,
    x: 0,
    transition: {
      duration: 0.6,
      delay,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
});

export const scaleIn = (delay: number = 0): Variants => ({
  hidden: {
    scale: 0.95,
    opacity: 0,
  },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      duration: 0.4,
      delay,
      ease: "easeOut",
    },
  },
});

export const slideIn = (direction: "left" | "right", delay: number = 0): Variants => ({
  hidden: {
    x: direction === "left" ? -100 : 100,
    opacity: 0,
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      delay,
      ease: "easeOut",
    },
  },
});

export const staggerContainer = (staggerChildren: number = 0.1): Variants => ({
  hidden: {},
  visible: {
    transition: {
      staggerChildren,
      delayChildren: 0.1,
    },
  },
});

export const cardHover: Variants = {
  rest: {
    scale: 1,
    y: 0,
    transition: {
      duration: 0.2,
      ease: "easeOut",
    },
  },
  hover: {
    scale: 1.05,
    y: -5,
    transition: {
      duration: 0.2,
      ease: "easeOut",
    },
  },
};

export const buttonHover: Variants = {
  rest: {
    scale: 1,
  },
  hover: {
    scale: 1.05,
    transition: {
      duration: 0.2,
      ease: "easeOut",
    },
  },
  tap: {
    scale: 0.95,
  },
};

export const starAnimation: Variants = {
  rest: {
    scale: 1,
    rotate: 0,
  },
  hover: {
    scale: 1.2,
    rotate: 12,
    transition: {
      duration: 0.2,
      ease: "easeOut",
    },
  },
  tap: {
    scale: 1.3,
    rotate: 15,
    transition: {
      duration: 0.1,
    },
  },
};

export const floatingAnimation: Variants = {
  animate: {
    y: [-10, 10, -10],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

export const glowEffect: Variants = {
  animate: {
    boxShadow: [
      "0 0 5px rgba(241, 194, 50, 0.5), 0 0 10px rgba(241, 194, 50, 0.3)",
      "0 0 20px rgba(241, 194, 50, 0.8), 0 0 30px rgba(241, 194, 50, 0.5)",
      "0 0 5px rgba(241, 194, 50, 0.5), 0 0 10px rgba(241, 194, 50, 0.3)",
    ],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

// Enhanced card animations with premium effects
export const premiumCardHover: Variants = {
  rest: {
    scale: 1,
    y: 0,
    rotateX: 0,
    rotateY: 0,
    boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
    transition: {
      duration: 0.3,
      ease: [0.23, 1, 0.32, 1],
    },
  },
  hover: {
    scale: 1.03,
    y: -8,
    rotateX: 5,
    rotateY: 2,
    boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25), 0 0 0 1px rgba(241, 194, 50, 0.1)",
    transition: {
      duration: 0.3,
      ease: [0.23, 1, 0.32, 1],
    },
  },
  tap: {
    scale: 0.98,
    y: -4,
  },
};

// Magnetic button effect
export const magneticButton: Variants = {
  rest: {
    scale: 1,
    boxShadow: "0 4px 14px 0 rgba(241, 194, 50, 0.2)",
  },
  hover: {
    scale: 1.05,
    boxShadow: "0 6px 20px 0 rgba(241, 194, 50, 0.4)",
    transition: {
      duration: 0.2,
      ease: "easeOut",
    },
  },
  tap: {
    scale: 0.95,
    transition: {
      duration: 0.1,
    },
  },
};

// Text reveal animation
export const textReveal: Variants = {
  hidden: {
    opacity: 0,
    y: 20,
    clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0 100%)",
  },
  visible: {
    opacity: 1,
    y: 0,
    clipPath: "polygon(0 0%, 100% 0%, 100% 100%, 0 100%)",
    transition: {
      duration: 0.8,
      ease: [0.76, 0, 0.24, 1],
    },
  },
};

// Gradient animation
export const gradientShift: Variants = {
  animate: {
    backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "linear",
    },
  },
};

// Parallax scroll effect
export const parallaxY = (speed: number = 0.5): Variants => ({
  animate: {
    y: [0, -50 * speed, 0],
    transition: {
      duration: 20,
      repeat: Infinity,
      ease: "linear",
    },
  },
});

// Page transition animations
export const pageTransition: Variants = {
  initial: {
    opacity: 0,
    scale: 0.95,
    filter: "blur(10px)",
  },
  enter: {
    opacity: 1,
    scale: 1,
    filter: "blur(0px)",
    transition: {
      duration: 0.6,
      ease: [0.23, 1, 0.32, 1],
    },
  },
  exit: {
    opacity: 0,
    scale: 1.05,
    filter: "blur(10px)",
    transition: {
      duration: 0.4,
      ease: [0.76, 0, 0.24, 1],
    },
  },
};

// Loading spinner
export const loadingSpinner: Variants = {
  animate: {
    rotate: 360,
    transition: {
      duration: 1,
      repeat: Infinity,
      ease: "linear",
    },
  },
};

// Micro-interactions
export const microBounce: Variants = {
  tap: {
    scale: 0.95,
    transition: {
      duration: 0.1,
      ease: "easeOut",
    },
  },
  hover: {
    scale: 1.05,
    transition: {
      duration: 0.2,
      ease: "easeOut",
    },
  },
};

// Staggered grid animation
export const staggeredGrid = (staggerDelay: number = 0.1): Variants => ({
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: staggerDelay,
      delayChildren: 0.2,
    },
  },
});

// Grid item animation
export const gridItem: Variants = {
  hidden: {
    opacity: 0,
    y: 30,
    scale: 0.9,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: [0.23, 1, 0.32, 1],
    },
  },
};

// Navigation drawer animation
export const drawerSlide: Variants = {
  closed: {
    x: "-100%",
    transition: {
      duration: 0.3,
      ease: [0.23, 1, 0.32, 1],
    },
  },
  open: {
    x: 0,
    transition: {
      duration: 0.3,
      ease: [0.23, 1, 0.32, 1],
    },
  },
};

// Modal animations
export const modalBackdrop: Variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.2,
    },
  },
};

export const modalContent: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.95,
    y: 20,
  },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.3,
      ease: [0.23, 1, 0.32, 1],
    },
  },
};
