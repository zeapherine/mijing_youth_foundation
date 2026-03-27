import * as React from "react"
import { cn } from "@/lib/utils"

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  level?: 0 | 1 | 2
  glass?: boolean
}

const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, level = 1, glass = false, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "rounded-[3rem] p-8 transition-all duration-500",
          level === 0 && "bg-background",
          level === 1 && "tonal-layer-1",
          level === 2 && "tonal-layer-2",
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
