import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-bold transition-all duration-300 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 active:scale-95",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-on-primary hover:bg-primary/90 shadow-sm",
        destructive:
          "bg-tertiary text-on-tertiary hover:bg-tertiary/90 shadow-sm",
        outline:
          "border border-primary/20 bg-transparent hover:bg-primary/5 text-primary",
        secondary:
          "bg-secondary text-on-secondary hover:bg-secondary/80",
        tertiary:
          "bg-tertiary text-on-tertiary hover:bg-tertiary/80",
        ghost: "hover:bg-primary/5 text-primary",
        link: "text-primary underline-offset-4 hover:underline",
        inverted: "bg-surface-lowest text-primary hover:bg-surface-high shadow-sm",
      },
      size: {
        default: "h-12 px-8 py-3",
        sm: "h-10 px-4 text-xs",
        lg: "h-14 px-10 text-lg",
        xl: "h-16 px-12 text-xl font-heading",
        "2xl": "h-20 px-16 text-2xl font-heading",
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
        className={cn(buttonVariants({ variant, size, className }), "rounded-sm")}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
