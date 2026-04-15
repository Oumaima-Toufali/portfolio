import * as React from "react"
import { cn } from "@/lib/utils"

const Card = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        "rounded-xl border border-white/5 bg-surface/30 backdrop-blur-sm text-foreground shadow-lg overflow-hidden transition-all duration-300",
        className
      )}
      {...props}
    />
  )
)
Card.displayName = "Card"

export { Card }
