import * as React from "react"
import { cn } from "@/lib/utils"
import { ArrowRight } from "lucide-react"
import { Button } from "./button"

interface CTAButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "solid" | "ghost" | "light" | "solidWhite"
  size?: "default" | "lg"
  showArrow?: boolean
  children: React.ReactNode
}

export function CTAButton({
  variant = "solid",
  size = "default",
  showArrow = true,
  children,
  className,
  ...props
}: CTAButtonProps) {
  const ctaVariants = {
    solid: "bg-primary text-primary-foreground hover:bg-primary/90",
    solidWhite: "bg-white text-primary hover:bg-gray-100",
    ghost: "bg-transparent text-primary border-2 border-primary hover:bg-primary hover:text-primary-foreground",
    light: "bg-background text-primary hover:bg-sidebar"
  }
  
  return (
    <Button
      className={cn(
        "font-semibold hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 hover:cursor-pointer",
        ctaVariants[variant],
        className
        )}
      {...props}
    >
      {children}
      {showArrow && (
        <ArrowRight 
          className={cn(
            "transition-transform duration-300",
            size === "lg" ? "w-6 h-6" : "w-5 h-5"
          )} 
        />
      )}
    </Button>
  )
}
