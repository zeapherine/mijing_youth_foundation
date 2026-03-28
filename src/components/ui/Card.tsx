"use client"

import * as React from "react"
import { motion, HTMLMotionProps } from "framer-motion"
import { cn } from "@/lib/utils"
import { hoverLift } from "@/lib/animations"

interface CardProps extends Omit<HTMLMotionProps<"div">, "level"> {
  level?: 0 | 1 | 2
  glass?: boolean
  animateHover?: boolean
}

const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, level = 1, glass = false, animateHover = true, ...props }, ref) => {
    return (
      <motion.div
        ref={ref}
        variants={animateHover ? hoverLift : undefined}
        whileHover={animateHover ? "hover" : undefined}
        className={cn(
          "rounded-sm p-10 transition-all duration-500",
          level === 0 && "bg-transparent",
          level === 1 && "bg-surface-low shadow-sm",
          level === 2 && "bg-surface-lowest shadow-premium",
          glass && "glass",
          className
        )}
        {...props}
      />
    )
  }
)
Card.displayName = "Card"

export { Card }
