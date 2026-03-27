import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 active:scale-95 hover:scale-[1.02]",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground shadow-ambient hover:bg-primary/90 hover:shadow-glow",
        destructive:
          "bg-destructive text-destructive-foreground shadow-ambient hover:bg-destructive/90",
        outline:
          "border border-foreground/10 bg-transparent shadow-sm hover:bg-foreground/5",
        secondary:
          "bg-secondary text-secondary-foreground shadow-ambient hover:bg-secondary/80",
        tertiary:
          "bg-tertiary text-foreground shadow-ambient hover:bg-tertiary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
        inverted: "bg-neutral text-background shadow-ambient hover:bg-neutral/90",
      },
      size: {
        default: "h-11 px-8 py-2",
        sm: "h-9 rounded-full px-4 text-xs",
        lg: "h-14 rounded-full px-10 text-lg",
        xl: "h-16 rounded-full px-12 text-xl",
        "2xl": "h-20 rounded-full px-16 text-2xl",
        icon: "h-10 w-10",
        pill: "h-12 px-10 rounded-full",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }), "rounded-full")}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
