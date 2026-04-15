import * as React from "react"
import { cn } from "@/lib/utils"

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "outline" | "gold"
}

function Badge({ className, variant = "default", ...props }: BadgeProps) {
  return (
    <div
      className={cn(
        "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2",
        {
          "bg-white/10 text-foreground border border-transparent": variant === "default",
          "text-foreground border border-white/20": variant === "outline",
          "bg-primary/10 text-primary border border-primary/30 backdrop-blur-sm": variant === "gold",
        },
        className
      )}
      {...props}
    />
  )
}

export { Badge }
