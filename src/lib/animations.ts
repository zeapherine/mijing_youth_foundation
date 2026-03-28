import { Variants } from "framer-motion"

/**
 * Editorial Bezier Easing: Custom curve for premium feel.
 * Fast start, smooth deceleration.
 */
export const editorialEasing = [0.16, 1, 0.3, 1] as [number, number, number, number]

/**
 * Common Animation Variants
 */

export const fadeInUp: Variants = {
  initial: { opacity: 0, y: 30 },
  animate: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.8, ease: editorialEasing }
  },
  exit: { 
    opacity: 0, 
    y: -20,
    transition: { duration: 0.6, ease: "circIn" }
  }
}

export const fadeIn: Variants = {
  initial: { opacity: 0 },
  animate: { 
    opacity: 1,
    transition: { duration: 1, ease: editorialEasing }
  },
  exit: { 
    opacity: 0,
    transition: { duration: 0.5 }
  }
}

export const staggerContainer: Variants = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
}

export const scaleUp: Variants = {
  initial: { opacity: 0, scale: 0.95 },
  animate: { 
    opacity: 1, 
    scale: 1,
    transition: { duration: 0.8, ease: editorialEasing }
  }
}

/**
 * Page Transitions
 */

export const pageVariants: Variants = {
  initial: { opacity: 0, y: 0 },
  animate: { 
    opacity: 1, 
    y: 0,
    transition: { 
      duration: 0.4, 
      ease: editorialEasing 
    }
  },
  exit: { 
    opacity: 0, 
    y: 0,
    transition: { 
      duration: 0.3, 
      ease: "easeOut"
    }
  }
}

/**
 * Interactive Micro-interactions
 */

export const hoverLift = {
  whileHover: { 
    y: -8, 
    scale: 1.01,
    transition: { duration: 0.4, ease: editorialEasing }
  },
  whileTap: { scale: 0.98 }
}

export const hoverGlow = {
  whileHover: { 
    boxShadow: "0 20px 40px -10px rgba(255, 111, 97, 0.2)",
    transition: { duration: 0.3 }
  }
}
